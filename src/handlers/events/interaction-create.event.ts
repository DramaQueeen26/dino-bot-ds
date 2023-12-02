import { Client } from 'discord.js'

interface Options {
  client: Client
}

export class InteractionCreateEvent {

  private client: Client

  constructor( options: Options ) {

    const { client } = options

    this.client = client

  }

  init() {

    this.client.on( 'interactionCreate', async interaction => {
      if ( !interaction.isCommand() ) return

      const { commandName } = interaction

      console.log( commandName )

      if ( interaction.commandName === 'hi' ) {
        await interaction.reply( 'Sapo' )
      }

      if ( interaction.commandName === 'bye' ) {
        await interaction.reply( 'Nyaa' )
      }

    } )

  }
}