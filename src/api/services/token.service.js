const jwt = require("jsonwebtoken")
const httpErrors = require("http-errors")
const token_key = "My Secret Passcode"

module.exports = {
  /*
   * _id : After login user ID
   * _email - User's Email ID
   */
  generateToken: async (_id, _email) => {
    if (!_id && !_email) throw httpErrors[401]
    try {
      return jwt.sign({ _id, _email }, token_key, {
        expiresIn: "2h"
      })
    } catch (err) {
      throw httpErrors[401]
    }
  },

  /*
   * _token - recieved from client
   */
  validateToken: async (_token) => {
    if (!_token) throw httpErrors[403]
    try {
      const decoded = jwt.verify(_token, token_key)
      return decoded
    } catch (err) {
      throw httpErrors[403]
    }
  }
}
