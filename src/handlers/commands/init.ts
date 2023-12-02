import { REST, Routes } from 'discord.js'
import { BasicCommands } from './list';

interface Options {
  token: string
  clientId: string
}
export class Commands {

  private readonly token: string
  private readonly clientId: string
  private readonly commands: {[ key: string ]: any}

  constructor( options: Options ) {

    const { token, clientId } = options

    this.token = token
    this.clientId = clientId
    this.commands = [ ...BasicCommands ]
    
  }

  init() {

    const rest = new REST( { version: '10' } ).setToken( this.token )

    try {

      rest.put( Routes.applicationCommands( this.clientId ), { body: this.commands } )

    } catch ( error ) {
      
      console.error( error )
    
    }

  }

}