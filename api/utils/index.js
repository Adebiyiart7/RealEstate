const apiResponse = (code, message, body) => {
  return {
    code: code,
    message: message || "",
    body: body,
  }
}

module.exports = {
  apiResponse,
}