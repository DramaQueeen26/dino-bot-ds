import 'dotenv/config'
import * as env from 'env-var'

export const envs = {

  TOKEN: env.get('TOKEN').required().asString(),
  CLIENT_ID: env.get('CLIENT_ID').required().asString(),
  ACTIVITY: env.get('ACTIVITY').required().asString(),

}