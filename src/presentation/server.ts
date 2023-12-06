
import { Client } from 'discord.js';
import { CommandsHandler, EventsHanlder } from './handlers';
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

    try {

      // * Cargar comandos
      new CommandsHandler(client).init()

      //* Cargar eventos
      new EventsHanlder(client).init()
      
      // * Iniciar el bot
      await client.login( this.token )

    } catch (error) {
      
      // console.log(error)
      throw new Error('An error occurred while starting')

    }


  }

}