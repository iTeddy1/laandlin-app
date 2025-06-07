export default function formatNumber(n) {
  // Handle falsy values (null, undefined, '')
  if (n === null || n === undefined || n === '') {
    return ''
  }

  // Convert to number and check if valid
  const number = Number(n)
  if (isNaN(number)) {
    return ''
  }

  // Format with commas and append VND
  const formatted = number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
  return `${formatted} VND`
}
