const formatResponse = (res, data, message = "", status = 200) => {
  return res.status(status).json({
    data,
    message,
    success: status >= 200 && status <= 299
  })
}

module.exports = { formatResponse }