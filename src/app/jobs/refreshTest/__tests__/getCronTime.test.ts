import getCronTime from '../getCronTime'

describe('[refreshMonitoringDashboard - getCronTime] Test case', () => {
  it('Should be an instance of a function', () => {
    expect(getCronTime).toBeInstanceOf(Function)
  })

  it('Should return the expected cronTime', () => {
    const expected = {
      cronTime: '* * * * *'
    }

    const response = getCronTime()
    expect(response).toBe(expected.cronTime)
  })
})
