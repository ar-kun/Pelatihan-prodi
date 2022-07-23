export const price = (item) =>
 new Intl.NumberFormat('id-ID', {
  style: 'currency',
  currency: 'IDR',
 }).format(item);
