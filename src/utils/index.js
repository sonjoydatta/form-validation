export function checkProperties(obj) {
  for (var key in obj) {
    if (obj[key] !== null && obj[key] !== undefined && obj[key] !== '')
      return false;
  }
  return true;
}