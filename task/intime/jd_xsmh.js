const { getTaskFile_inTimeActive, cron } = require('../../utils/common')

cron.schedule('0 0 1-18 6 *', () => {
  require(getTaskFile_inTimeActive('jd_xsmh'))
});