module.exports = (err, req, res, next) => {
  const code = res.statusCode;
  const isProduction = process.env.NODE_ENV === "production";

  if (code !== 500) {
    console.log(`code: ${code}, ${err}`.red);
    return res.status(code).json({
      code: code,
      message: "",
      body: {
        message: err.message,
        stack: isProduction ? "" : err.stack
      }
    });
  } else {
    return res.status(500).json({
      code: 500,
      message: "",
      body: {
        message: "Server error!",
        stack: isProduction ? "" : error.stack
      }
    });
  }
};
