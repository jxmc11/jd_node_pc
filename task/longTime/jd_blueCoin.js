const { getTaskFile_longActive, cron } = require('../../utils/common')

cron.schedule('0 0 0 * * *', () => {
  require(getTaskFile_longActive('jd_blueCoin'))
});