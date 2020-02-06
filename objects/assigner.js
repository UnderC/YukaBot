module.exports = (A, ...args) => {
  if (typeof A === 'function') {
    return new A(...args)
  }
}
