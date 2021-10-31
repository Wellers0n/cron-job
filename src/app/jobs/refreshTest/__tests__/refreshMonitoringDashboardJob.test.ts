import { CronJob } from 'cron'
import moment from 'moment'
import { refreshTests } from '../index'
import { getJob } from '../getJob'
import getCronTime from '../getCronTime'
import cronJobCompleted from '../cronJobCompleted'
import cronJobShouldStart from '../cronJobShouldStart'
import getTimeZone from '../getTimeZone'

jest.mock('cron')

describe('[refreshMonitoringDashboard] - test case', () => {
  it('Should be an instance of a function', () => {
    expect(getJob).toBeInstanceOf(Function)
  })

  it('Should call the CronJob cronstructor with the correct params', () => {
    CronJob.prototype.nextDate.mockReturnValue(moment().add(1, 'd'))

    refreshTests()
    expect(CronJob).toHaveBeenCalledWith(
      getCronTime(),
      getJob,
      cronJobCompleted,
      cronJobShouldStart(),
      getTimeZone()
    )
  })
})
