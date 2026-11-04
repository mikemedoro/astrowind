/**
 * Format a content-collection date for display.
 *
 * Frontmatter dates like `2026-03-01` parse as UTC midnight. Formatting in the
 * build machine's local zone shifts them a day earlier anywhere west of UTC,
 * so always format in UTC.
 */
export function formatDate(date: Date): string {
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    timeZone: 'UTC',
  });
}
