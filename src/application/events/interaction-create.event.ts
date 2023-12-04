import { ClientWithCommands } from '../../interfaces/client-commands.interface';

export class InteractionCreateEvent {

  private client: ClientWithCommands

  constructor( client: ClientWithCommands ) {

    this.client = client

  }

  init() {

    this.client.on( 'interactionCreate', async interaction => {
      
      if ( !interaction.isCommand() ) return

      const slashCommands = this.client.slashCommands.get( interaction.commandName )

      if( !slashCommands ) return

      try {
        slashCommands.execute( interaction )
      } catch (error) {
        console.log(error)
        interaction.reply(`An error occurred while executing the command: ${ interaction.commandName }`)
      }

    })

  }
}