import { readdirSync } from 'fs';
import { join } from 'path';
import { BotEvent, ClientWithCommands } from '../../interfaces';


export class EventsHanlder {

  private readonly client: ClientWithCommands
  private readonly eventsPath: string
  private readonly events: string[]

  constructor( client: ClientWithCommands ) {

    this.client = client
    this.eventsPath = join( __dirname, "../../application/events" )
    this.events = []

  }

  init() {

    readdirSync( this.eventsPath ).filter( file => file.endsWith( '.ts' ) )
    .forEach( file => {
      const event: BotEvent = require( `${ this.eventsPath }/${ file }` ).default

      event.once ?
            this.client.once(event.name, (...args) => event.execute(this.client, ...args))
            :
            this.client.on(event.name, (...args) => event.execute(this.client, ...args))
        console.log(`Loaded event: ${event.name} 🚀`)
    })

  }


}