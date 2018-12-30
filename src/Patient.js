
function Patient (name, age, height, weight) {
  return {
    bmi: function bmi () {
      return weight / (height * height)
    },
    heartBeats: function heartBeats () {
      return age * 365 * 24 * 60 * 80
    }
  }
}
