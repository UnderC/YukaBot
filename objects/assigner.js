let storage = null

module.exports = (A, b, c) => {
  if (typeof A === 'function') {
    return new A(b, storage || c)
  }
}

module.exports.storage = (s) => {
  storage = s
  return this
}
