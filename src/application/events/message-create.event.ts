import { Client } from 'discord.js'

interface Options {
  client: Client
}

export class MessageCreateEvent {

  private client: Client

  constructor( options: Options ) {

    const { client } = options

    this.client = client

  }

  init() {

    this.client.on( 'messageCreate', async message => {

      console.log( { message: message.content } )

      if ( message.content === '!hi' ) await message.reply( `Sapo` )
      if ( message.content === '!bye' ) await message.reply( `${ message.author.globalName } se va por negr@` )
      if ( message.content === '!set' ) {

        if ( !message.guild ) return

        message.guild.roles.cache.map( role => {
          if ( role.name === "negros" ) {

            message.member?.roles.add( role )

          }
        })
      }

    })
  }
}