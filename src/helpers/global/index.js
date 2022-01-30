export function encodeToBase64(string) {
  // binary to ascii
  return btoa(string);
}

export function decodeFromBase64(string) {
  // ascii to binary
  return atob(string);
}

export function setDataInLocalStorate(key, value) {
  localStorage.setItem(
    encodeToBase64(key),
    encodeToBase64(JSON.stringify(value)) // FIXME This can be safe if you added encryption in the back side for the password
  );
}

export function getDataFromLocalStorage(key) {
  const decodedKey = encodeToBase64(key);
  const data = localStorage.getItem(decodedKey);
  if (!data) return null;
  const decodedData = decodeFromBase64(data);
  return JSON.parse(decodedData);
}
