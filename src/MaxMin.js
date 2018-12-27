
function MaxMin (arr) {
  var _max = Number.MIN_VALUE
  var _min = Number.MAX_VALUE

  arr.forEach(function (number) {
    if (number > _max) {
      _max = number
    }
    if (number < _min) {
      _min = number
    }
  })
  return {
    get max () {
      return _max
    },
    get min () {
      return _min
    }
  }
}
