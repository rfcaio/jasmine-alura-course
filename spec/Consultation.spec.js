'use strict'

describe('Consultation', function () {
  describe('getPrice', function () {
    describe('regress', function () {
      it('should return 0 if it is a regress', function () {
        var consultation = new ConsultationBuilder().setRegress().withProceedings(['x-ray']).construct()
        expect(consultation.getPrice()).toEqual(0)
      })
    })

    describe('comum proceedings', function () {
      it('should add 25 for every comum proceeding', function () {
        var consultation = new ConsultationBuilder().withProceedings(['routine examination', 'routine examination']).construct()
        expect(consultation.getPrice()).toEqual(50)
      })
    })

    describe('specific proceedings', function () {
      it('should add the specific price for `blood test` and `x-ray` proceedings', function () {
        var consultation = new ConsultationBuilder().withProceedings(['blood test', 'routine examination', 'x-ray']).construct()
        expect(consultation.getPrice()).toEqual(32 + 25 + 55)
      })
    })

    describe('private consultation', function () {
      it('should double the price if it is a private consultation', function () {
        var consultation = new ConsultationBuilder().setPrivate().withProceedings(['routine examination', 'routine examination']).construct()
        expect(consultation.getPrice()).toEqual(100)
      })

      it('should double the price if it is a private consultation for `blood test` and `x-ray` proceedings', function () {
        var consultation = new ConsultationBuilder().setPrivate().withProceedings(['blood test', 'x-ray']).construct()
        expect(consultation.getPrice()).toEqual((55 + 32) * 2)
      })
    })
  })
})
