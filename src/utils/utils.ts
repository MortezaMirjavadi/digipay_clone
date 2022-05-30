export function numberWithCommas(x: number | string) {
  if (!x || typeof x !== "number" && x?.length === 0) return '';
  return x
    .toString()
    ?.split(',')
    .join('')
    .replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}
export function numberWithoutCommas(x: string) {
  return x.split(',').join('');
}
