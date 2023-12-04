
import { Client } from 'discord.js';
import { CommandsHandler } from './handlers';
import { InteractionCreateEvent, ReadyEvent } from '../application/events';
import { ClientWithCommands } from '../interfaces/client-commands.interface';

interface Options {
  token: string
  clientId: string
  activity: string
}

export class Server {

  private readonly token: string
  private readonly clientId: string
  private readonly activity: string

  constructor( options: Options ){

    const { token, clientId, activity } = options

    this.token = token
    this.clientId = clientId
    this.activity = activity

  }

  async start() {

    const client = new Client({ intents: [3276799] }) as ClientWithCommands

    new CommandsHandler(client).init()

    try {
      
      // * Iniciar el bot
      await client.login( this.token )


      // // * Cargar Comandos
      // new Commands({ token: this.token, clientId: this.clientId }).init()

      // // * Cargar Eventos
      new ReadyEvent({ client: client, activity: this.activity }).init()
      new InteractionCreateEvent(client).init()
      // new MessageCreateEvent({ client }).init()

    } catch (error) {
      
      // console.log(error)
      throw new Error('An error occurred while starting')

    }


  }

}