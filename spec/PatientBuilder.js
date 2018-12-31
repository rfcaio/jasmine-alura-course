
function PatientBuilder () {
  var _name = 'Sarah Connor'
  var _age = 42
  var _height = 1.70
  var _weight = 65

  return {
    construct: function construct () {
      return new Patient(_name, _age, _height, _weight)
    },
    withAge: function withAge (age) {
      _age = age
      return this
    },
    withHeight: function withHeight (height) {
      _height = height
      return this
    },
    withName: function withName (name) {
      _name = name
      return this
    },
    withWeight: function withWeight (weight) {
      _weight = weight
      return this
    }
  }
}
