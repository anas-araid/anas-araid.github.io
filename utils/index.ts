export function concatClassNames(...classes: string[]): string {
  return classes.filter(Boolean).join(' ');
}
