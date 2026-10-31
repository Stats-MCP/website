const storagePrefix = 'statsmcp:tab:';

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

function select(root: ParentNode, group: string, value: string): void {
  for (const tab of tabsIn(root, group)) {
    const selected = tab.dataset.tabValue === value;
    tab.setAttribute('aria-selected', String(selected));
    tab.tabIndex = selected ? 0 : -1;
  }
  const panels = root.querySelectorAll<HTMLElement>(
    `[data-tab-panel-group="${group}"]`
  );
  for (const panel of panels) {
    panel.hidden = panel.dataset.tabPanelValue !== value;
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

export function initTabs(root: Document = document): void {
  const groups = new Set(
    [...root.querySelectorAll<HTMLElement>('[role="tab"][data-tab-group]')].map(
      (tab) => tab.dataset.tabGroup ?? ''
    )
  );
  for (const group of groups) {
    const restorable = tabsIn(root, group).every(
      (tab) =>
        tab.closest('[role="tablist"]')?.getAttribute('data-tab-restore') !==
        'false'
    );
    if (!restorable) continue;
    const stored = readStored(group);
    if (
      stored &&
      tabsIn(root, group).some((tab) => tab.dataset.tabValue === stored)
    ) {
      select(root, group, stored);
    }
  }
  root.addEventListener('click', (event) => {
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
