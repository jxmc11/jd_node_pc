const { getTaskFile_longActive, cron } = require('../../utils/common')

cron.schedule('5 6-18/6 * * *', () => {
  require(getTaskFile_longActive('jd_fruit'))
});