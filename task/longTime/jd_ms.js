const { getTaskFile_longActive, cron } = require('../../utils/common')

cron.schedule('10 7 * * *', () => {
  require(getTaskFile_longActive('jd_ms'))
});