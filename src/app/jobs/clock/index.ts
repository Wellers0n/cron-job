import { CronJob } from 'cron'
import moment from 'moment'

import getCronTime from './getCronTime'
import { getJob } from './getJob'
import cronJobCompleted from './cronJobCompleted'
import cronJobShouldStart from './cronJobShouldStart'
import getTimeZone from './getTimeZone'

function clock(): void {
  const job = new CronJob(
    getCronTime(),
    getJob,
    cronJobCompleted,
    cronJobShouldStart(),
    getTimeZone()
  )

  const nextDate = job.nextDate().format('DD/MM/YYYY HH:mm:ss')
  const appStartedAt = moment().format('DD/MM/YYYY HH:mm:ss')

  const loggerPrefix = '[CRON JOB] clock job'
  
  console.log(`${loggerPrefix} next date: ${nextDate}`)
  console.log(`${loggerPrefix} started at: ${appStartedAt}`)
}

export { clock }
