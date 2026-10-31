const monthlyPeriod = /^(\d{4})M(\d{2})$/;

export function formatPeriod(period: string, locale: string): string {
  const match = monthlyPeriod.exec(period);
  if (!match) return period;
  const [, year, month] = match;
  const date = new Date(Date.UTC(Number(year), Number(month) - 1, 1));
  return new Intl.DateTimeFormat(locale, {
    month: 'short',
    year: 'numeric',
    timeZone: 'UTC'
  }).format(date);
}
