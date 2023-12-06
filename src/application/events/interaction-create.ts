import { Interaction } from "discord.js"
import { BotEvent } from '../../interfaces'

const event: BotEvent = {
    name: "interactionCreate",
    execute: (client, interaction: Interaction) => {
      if ( !interaction.isCommand() ) return

      const slashCommands = client.slashCommands.get( interaction.commandName )

      if( !slashCommands ) return

      try {
        slashCommands.execute( interaction )
      } catch (error) {
        console.log(error)
        interaction.reply(`An error occurred while executing the command: ${ interaction.commandName }`)
      }
    }
}

export default event