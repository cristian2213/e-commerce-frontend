export function encodeToBase64(string) {
  // binary to ascii
  return btoa(string);
}

export function decodeFromBase64(string) {
  // ascii to binary
  try {
    return atob(string);
  } catch {
    return null;
  }
}

export function setDataInLocalStorate(key, value) {
  if (getDataFromLocalStorage(key)) return;
  localStorage.setItem(
    encodeToBase64(key),
    encodeToBase64(JSON.stringify(value)) // FIXME This can be safe if you added encryption in the back side for the password
  );
}

export function getDataFromLocalStorage(key) {
  const encodedKey = encodeToBase64(key);
  const data = localStorage.getItem(encodedKey);
  if (!data) return null;
  const decodedData = decodeFromBase64(data);
  if (!decodedData) return null;

  try {
    return JSON.parse(decodedData);
  } catch {
    return null;
  }
}

export function deleteDataFromLocalStorage(key) {
  if (!getDataFromLocalStorage(key)) return;
  localStorage.removeItem(encodeToBase64(key));
}
