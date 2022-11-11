const jwt = require("jsonwebtoken")

module.exports = (token_key) => {
  return (req, res, next) => {
    const token =
      req.body.token || req.query.token || req.headers["x-access-token"]

    if (!token) {
      return res.status(403).send("A token is required for authentication")
    }
    try {
      const decoded = jwt.verify(token, token_key)
      req.user = decoded
    } catch (err) {
      return res.status(401).send("Invalid Token")
    }
    return next()
  }
}
