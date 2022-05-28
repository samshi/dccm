const path = require('path')
const chalk = require('chalk')

module.exports = () => {
  const NAME = 'DCCM'
  const logger = console

  /**
   * 编译错误
   * @note 没找到next环境变量配置这个选项，自己定义一个
   */
  const TSC_IGNORE_BUILD_ERRORS = process.env.TSC_IGNORE_BUILD_ERRORS === 'true'

  /**
   * 运行环境
   */
  const NODE_ENV = process.env.NODE_ENV || 'development'
  logger.log(`${chalk.bgGreen(NAME)} process.env.NODE_ENV=${NODE_ENV}`)

  return {
    typescript: {
      ignoreBuildErrors: TSC_IGNORE_BUILD_ERRORS,
    },
  }
}
