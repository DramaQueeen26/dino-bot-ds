import { Client } from 'discord.js'

interface Options {
  client: Client
  activity: string
}

export class ReadyEvent {

  private client: Client
  private activity: string

  constructor( options: Options ){

    const { client, activity } = options

    this.client = client
    this.activity = activity

  }

  init(){
    // * Al tenerlo listo
    this.client.on( 'ready', () => {
        
      if( !this.client.user ) return
      
      console.log( `Logged in as ${ this.client.user.username }!` )
      this.client.user.setActivity( this.activity )
    
    })
  }

}