export function isValidString(str) {
  return str && (str + "").trim().length > 0;
}
