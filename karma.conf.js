module.exports = config => {
  config.set({
    autoWatch: true,
    basePath: '',
    browsers: ['Chrome'],
    files: [
      'src/MaxMin.js',
      'spec/MaxMin.spec.js'
    ],
    frameworks: ['jasmine']
  })
}
