
function Schedule () {
  var millisecondsInOneDay = 24 * 60 * 60 * 1000
  return {
    setRegress: function setRegress (consultation) {
      var date = consultation.getDate()
      var isPrivate = consultation.isPrivate()
      var isRegress = true
      var patient = consultation.getPatient()
      var proceedings = consultation.getProceedings()
      var regressDate = new Date(date.getTime() + millisecondsInOneDay * 20)
      while (regressDate.getDay() === 0 || regressDate.getDay() === 6) {
        regressDate = new Date(regressDate.getTime() + millisecondsInOneDay)
      }
      return new Consultation(patient, proceedings, isPrivate, isRegress, regressDate)
    }
  }
}
