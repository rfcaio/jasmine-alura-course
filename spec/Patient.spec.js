'use strict'

describe('Patient', function () {
  var patient

  beforeEach(function () {
    patient = new PatientBuilder().withName('John Connor').withAge(28).withHeight(1.80).withWeight(85).construct()
  })

  it('should calculate body max index of a patient', function () {
    expect(patient.bmi()).toEqual(85 / (1.80 * 1.80))
  })

  it('should calculate patient heart beats', function () {
    expect(patient.heartBeats()).toEqual(28 * 365 * 24 * 60 * 80)
  })
})
