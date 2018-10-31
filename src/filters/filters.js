export function formatMoney (num) {
  return parseFloat(num).toLocaleString() + '¥'
}

export default {
  formatMoney
}