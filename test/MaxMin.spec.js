'use strict'

describe('MaxMin', function () {
  it('should get the maximum and minimum of an array in crescent order', function () {
    var mm = new MaxMin([3, 9, 11, 30])
    expect(mm.max).toEqual(30)
    expect(mm.min).toEqual(3)
  })

  it('should get the maximum and minimum of an array in decrescent order', function () {
    var mm = new MaxMin([30, 11, 9, 3])
    expect(mm.max).toEqual(30)
    expect(mm.min).toEqual(3)
  })

  it('should get the maximum and minimum of an array in random order', function () {
    var mm = new MaxMin([9, 3, 30, 11])
    expect(mm.max).toEqual(30)
    expect(mm.min).toEqual(3)
  })

  it('should get the maximum and minimum of an array with a single element', function () {
    var mm = new MaxMin([4])
    expect(mm.max).toEqual(mm.min)
  })
})
