import { envs } from './config/plugins/envs.plugin';
import { Server } from './presentation/server';

(async() => {
  main()
})()

function main() {

  const server = new Server({ 
    token: envs.TOKEN,
    clientId: envs.CLIENT_ID,
    activity: envs.ACTIVITY
  })

  server.start()

}
