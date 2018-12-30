
function Consultation (patient, proceedings, isParticular, isRegress) {
  return {
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
      if (isParticular) {
        price *= 2
      }
      return price
    }
  }
}
