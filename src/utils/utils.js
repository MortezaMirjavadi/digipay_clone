export function numberWithCommas(x) {
  if (!x || x?.length === 0) return '';
  return x
    .toString()
    ?.split(',')
    .join('')
    .replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}
export function numberWithoutCommas(x) {
  return x.split(',').join('');
}
