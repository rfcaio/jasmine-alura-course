module.exports = config => {
  config.set({
    autoWatch: true,
    basePath: '',
    browsers: ['Chrome'],
    files: [
      'src/Consultation.js',
      'src/MaxMin.js',
      'src/Patient.js',
      'spec/Consultation.spec.js',
      'spec/MaxMin.spec.js',
      'spec/Patient.spec.js',
      'spec/PatientBuilder.js'
    ],
    frameworks: ['jasmine']
  })
}
