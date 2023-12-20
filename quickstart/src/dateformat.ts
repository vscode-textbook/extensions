export function dateFormat(date : Date) : string {
  return date.getFullYear() + '-' + ( date.getMonth() + 1 ) + '-' + date.getDate();
}
