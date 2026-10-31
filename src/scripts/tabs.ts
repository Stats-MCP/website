const storagePrefix = 'statsmcp:tab:';
const scopeSelector = '[data-tab-scope]';
const initialized = new WeakSet<Document>();

function readStored(key: string): string | undefined {
  try {
    return localStorage.getItem(storagePrefix + key) ?? undefined;
  } catch {
    return undefined;
  }
}

function store(key: string, value: string): void {
  try {
    localStorage.setItem(storagePrefix + key, value);
  } catch {
    // Storage can be blocked (private mode); the selection still works for this page view.
  }
}

function tabsIn(root: ParentNode, group: string): HTMLElement[] {
  return [
    ...root.querySelectorAll<HTMLElement>(
      `[role="tab"][data-tab-group="${group}"]`
    )
  ];
}

function panelsIn(root: ParentNode, group: string): HTMLElement[] {
  return [
    ...root.querySelectorAll<HTMLElement>(`[data-tab-panel-group="${group}"]`)
  ];
}

function ownScope(element: Element, root: Document): ParentNode {
  return element.closest(scopeSelector) ?? root;
}

/** A scope only follows a value it has; other scopes keep their own selection. */
function scopesFor(root: Document, group: string): ParentNode[] {
  const scopes = new Set<ParentNode>();
  for (const element of [...tabsIn(root, group), ...panelsIn(root, group)]) {
    scopes.add(ownScope(element, root));
  }
  return [...scopes];
}

function select(root: Document, group: string, value: string): void {
  for (const scope of scopesFor(root, group)) {
    const tabs = tabsIn(scope, group).filter(
      (tab) => ownScope(tab, root) === scope
    );
    const panels = panelsIn(scope, group).filter(
      (panel) => ownScope(panel, root) === scope
    );
    const known = [...tabs, ...panels].some(
      (element) =>
        (element.dataset.tabValue ?? element.dataset.tabPanelValue) === value
    );
    if (!known) continue;
    for (const tab of tabs) {
      const selected = tab.dataset.tabValue === value;
      tab.setAttribute('aria-selected', String(selected));
      tab.tabIndex = selected ? 0 : -1;
    }
    for (const panel of panels) {
      panel.hidden = panel.dataset.tabPanelValue !== value;
    }
  }
}

function move(
  tabs: HTMLElement[],
  current: HTMLElement,
  key: string
): HTMLElement | undefined {
  const index = tabs.indexOf(current);
  if (key === 'ArrowRight') return tabs[(index + 1) % tabs.length];
  if (key === 'ArrowLeft') return tabs[(index - 1 + tabs.length) % tabs.length];
  if (key === 'Home') return tabs[0];
  if (key === 'End') return tabs[tabs.length - 1];
  return undefined;
}

function tabFromEvent(event: Event): HTMLElement | undefined {
  if (!(event.target instanceof Element)) return undefined;
  return (
    event.target.closest<HTMLElement>('[role="tab"][data-tab-group]') ??
    undefined
  );
}

function activatorFromEvent(event: Event): HTMLElement | undefined {
  if (!(event.target instanceof Element)) return undefined;
  return event.target.closest<HTMLElement>('[data-tab-activate]') ?? undefined;
}

export function initTabs(root: Document = document): void {
  if (initialized.has(root)) return;
  initialized.add(root);
  const groups = new Set<string>();
  for (const tab of root.querySelectorAll<HTMLElement>(
    '[role="tab"][data-tab-group]'
  )) {
    groups.add(tab.dataset.tabGroup ?? '');
  }
  for (const group of groups) {
    const restorable = tabsIn(root, group).every(
      (tab) =>
        tab.closest('[role="tablist"]')?.getAttribute('data-tab-restore') !==
        'false'
    );
    const stored = restorable ? readStored(group) : undefined;
    if (stored) select(root, group, stored);
  }
  root.addEventListener('click', (event) => {
    const activator = activatorFromEvent(event);
    const [activateGroup, activateValue] =
      activator?.dataset.tabActivate?.split(':') ?? [];
    if (activateGroup && activateValue) {
      select(root, activateGroup, activateValue);
      store(activateGroup, activateValue);
      return;
    }
    const tab = tabFromEvent(event);
    const group = tab?.dataset.tabGroup;
    const value = tab?.dataset.tabValue;
    if (!group || !value) return;
    select(root, group, value);
    store(group, value);
  });
  root.addEventListener('keydown', (event) => {
    const tab = tabFromEvent(event);
    const group = tab?.dataset.tabGroup;
    if (!tab || !group) return;
    const tablist = tab.closest('[role="tablist"]');
    const siblings = tablist ? tabsIn(tablist, group) : [];
    const next = move(siblings, tab, event.key);
    if (!next?.dataset.tabValue) return;
    event.preventDefault();
    select(root, group, next.dataset.tabValue);
    store(group, next.dataset.tabValue);
    next.focus();
  });
}
