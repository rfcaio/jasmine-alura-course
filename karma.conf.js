module.exports = config => {
  config.set({
    autoWatch: true,
    basePath: '',
    browsers: ['Chrome'],
    files: [
      'src/MaxMin.js',
      'test/MaxMin.spec.js'
    ],
    frameworks: ['jasmine']
  })
}
