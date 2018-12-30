'use strict'

describe('Patient', function () {
  var patient

  beforeEach(function () {
    patient = new Patient('John Connor', 28, 1.80, 85)
  })

  it('should calculate body max index of a patient', function () {
    expect(patient.bmi()).toEqual(85 / (1.80 * 1.80))
  })

  it('should calculate patient heart beats', function () {
    expect(patient.heartBeats()).toEqual(28 * 365 * 24 * 60 * 80)
  })
})
