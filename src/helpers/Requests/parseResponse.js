export function parseResponse(serverRes, error = false) {
  let errorMsg;
  if (!error) errorMsg = serverRes.data.message;
  else
    errorMsg = serverRes.response.data.errors
      ? serverRes.response.data.errors[0].msg
      : serverRes.response.data.message || 'Failed request, Please try again.';

  return errorMsg.endsWith('.') ? errorMsg : errorMsg + '.';
}
