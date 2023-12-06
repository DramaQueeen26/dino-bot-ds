import { envs } from '../../config/plugins/envs.plugin';
import { BotEvent, ClientWithCommands } from '../../interfaces'

const event: BotEvent = {
    name: "ready",
    once: true,
    execute: (client: ClientWithCommands) => {
        console.log(`Logged in as ${ client.user?.username }👌`)
        client.user?.setActivity( envs.ACTIVITY )
    }
}

export default event