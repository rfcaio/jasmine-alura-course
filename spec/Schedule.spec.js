'use strict'

describe('Schedule', function () {
  var schedule

  beforeEach(function () {
    schedule = new Schedule()
  })

  describe('setRegress', function () {
    it('should return a consultation 20 days after the date', function () {
      var consultation = new ConsultationBuilder().withDate(new Date(2019, 0, 2)).construct()
      var regress = schedule.setRegress(consultation)
      expect(regress.getDate().toString()).toEqual(new Date(2019, 0, 22).toString())
    })

    it('should skip days in a weekend', function () {
      var consultation = new ConsultationBuilder().withDate(new Date(2019, 0, 7)).construct()
      var regress = schedule.setRegress(consultation)
      expect(regress.getDate().toString()).toEqual(new Date(2019, 0, 28).toString())
    })
  })
})
