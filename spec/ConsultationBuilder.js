
function ConsultationBuilder () {
  var _patient = new PatientBuilder().construct()
  var _proceedings = []
  var _isPrivate = false
  var _isRegress = false
  var _date = new Date(2015, 11, 8)

  return {
    construct: function construct () {
      return new Consultation(_patient, _proceedings, _isPrivate, _isRegress, _date)
    },
    setPrivate: function setPrivate () {
      _isPrivate = true
      return this
    },
    setRegress: function setRegress () {
      _isRegress = true
      return this
    },
    withDate: function withDate (date) {
      _date = date
      return this
    },
    withPatient: function withPatient (patient) {
      _patient = patient
      return this
    },
    withProceedings: function withProceedings (proceedings) {
      _proceedings = proceedings
      return this
    }
  }
}
