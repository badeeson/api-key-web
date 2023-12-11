export function convertDate(dateISOString: string) {
  const d = new Date(dateISOString)
  return `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()}`;
}