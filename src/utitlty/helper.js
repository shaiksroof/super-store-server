const ID = (_length = 13) => {
  // Math.random to base 36 (numbers, letters),
  // grab the first 9 characters
  // after the decimal.
  return "_" + Math.random().toString(36).substr(2, _length) // max _length should be less then 13
}

module.exports = {
  ID
}
