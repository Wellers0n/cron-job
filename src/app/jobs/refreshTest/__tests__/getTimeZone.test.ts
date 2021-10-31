import getTimeZone from '../getTimeZone'

describe('[refreshMonitoringDashboard - getTimeZone] Test case', () => {
  it('Should be an instance of a function', () => {
    expect(getTimeZone).toBeInstanceOf(Function)
  })

  it('Should return the correct time zone', () => {
    const expected = {
      timezone: 'America/Sao_Paulo'
    }

    const response = getTimeZone()
    expect(response).toBe(expected.timezone)
  })
})
