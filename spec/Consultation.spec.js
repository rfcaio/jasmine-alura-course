'use strict'

describe('Consultation', function () {
  var patient

  beforeEach(function () {
    patient = new PatientBuilder().construct()
  })

  describe('getPrice', function () {
    describe('regress', function () {
      it('should return 0 if is a regress', function () {
        var consultation = new Consultation(patient, [], false, true)
        expect(consultation.getPrice()).toEqual(0)
      })
    })

    describe('comum proceedings', function () {
      it('should add 25 for every comum proceeding', function () {
        var consultation = new Consultation(patient, ['routine examination', 'routine examination'], false, false)
        expect(consultation.getPrice()).toEqual(50)
      })
    })

    describe('specific proceedings', function () {
      it('should add the specific price for `blood test` and `x-ray` proceedings', function () {
        var consultation = new Consultation(patient, ['blood test', 'routine examination', 'x-ray'], false, false)
        expect(consultation.getPrice()).toEqual(32 + 25 + 55)
      })
    })

    describe('particular consultation', function () {
      it('should double the price if is a particular consultation', function () {
        var consultation = new Consultation(patient, ['routine examination', 'routine examination'], true, false)
        expect(consultation.getPrice()).toEqual(100)
      })

      it('should double the price if is a particular consultation for `blood test` and `x-ray` proceedings', function () {
        var consultation = new Consultation(patient, ['blood test', 'x-ray'], true, false)
        expect(consultation.getPrice()).toEqual((55 + 32) * 2)
      })
    })
  })
})
