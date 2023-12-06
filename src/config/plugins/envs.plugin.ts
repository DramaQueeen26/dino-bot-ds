import 'dotenv/config'
import * as env from 'env-var'

export const envs = {

  TOKEN: env.get('TOKEN').required().asString(),
  CLIENT_ID: env.get('CLIENT_ID').required().asString(),
  ACTIVITY: env.get('ACTIVITY').required().asString(),
  INFO_COLOR: env.get('INFO_COLOR').required().asString(),
  SUCCESS_COLOR: env.get('SUCCESS_COLOR').required().asString(),
  ERROR_COLOR: env.get('ERROR_COLOR').required().asString(),
  WARNING_COLOR: env.get('WARNING_COLOR').required().asString()

}