const resetDelayMs = 2000;
const timers = new WeakMap<HTMLButtonElement, ReturnType<typeof setTimeout>>();
const initialized = new WeakSet<Document>();

function announce(root: Document, text: string): void {
  const status = root.getElementById('copy-status');
  if (!status) return;
  status.textContent = '';
  requestAnimationFrame(() => {
    status.textContent = text;
  });
}

export function initCopyButtons(root: Document = document): void {
  if (initialized.has(root)) return;
  initialized.add(root);
  root.addEventListener('click', (event) => {
    if (!(event.target instanceof Element)) return;
    const button = event.target.closest<HTMLButtonElement>('button[data-copy]');
    if (!button || !navigator.clipboard) return;
    const idleLabel = button.dataset.copyLabel ?? button.textContent ?? '';
    const doneLabel = button.dataset.copiedLabel ?? idleLabel;
    navigator.clipboard
      .writeText(button.dataset.copy ?? '')
      .then(() => {
        button.textContent = doneLabel;
        announce(root, doneLabel);
        clearTimeout(timers.get(button));
        timers.set(
          button,
          setTimeout(() => {
            button.textContent = idleLabel;
          }, resetDelayMs)
        );
      })
      .catch(() => undefined);
  });
}
