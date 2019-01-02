module.exports = config => {
  config.set({
    autoWatch: true,
    basePath: '',
    browsers: ['Chrome'],
    files: [
      'src/Consultation.js',
      'src/MaxMin.js',
      'src/Patient.js',
      'src/Schedule.js',
      'spec/Consultation.spec.js',
      'spec/ConsultationBuilder.js',
      'spec/MaxMin.spec.js',
      'spec/Patient.spec.js',
      'spec/PatientBuilder.js',
      'spec/Schedule.spec.js'
    ],
    frameworks: ['jasmine']
  })
}
