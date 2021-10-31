import cronJobShouldStart from '../cronJobShouldStart'

describe('[refreshMonitoringDashboard - cronJobShouldStart] Test case', () => {
  it('Should be an instance of a function', () => {
    expect(cronJobShouldStart).toBeInstanceOf(Function)
  })

  it('Should return true', () => {
    const response = cronJobShouldStart()
    expect(response).toBeTruthy()
  })
})
