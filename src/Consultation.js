
function Consultation (patient, proceedings, isPrivate, isRegress, date) {
  return {
    getDate: function getDate () {
      return date
    },
    getPatient: function getPatient () {
      return patient
    },
    getPrice: function getPrice () {
      if (isRegress) {
        return 0
      }
      var price = 0
      proceedings.forEach(function (proceeding) {
        switch (proceeding) {
          case 'blood test':
            price += 32
            break
          case 'x-ray':
            price += 55
            break
          default:
            price += 25
        }
      })
      if (isPrivate) {
        price *= 2
      }
      return price
    },
    getProceedings: function getProceedings () {
      return proceedings
    },
    isPrivate: function isPrivate () {
      return isPrivate
    },
    isRegress: function isRegress () {
      return isRegress
    }
  }
}
