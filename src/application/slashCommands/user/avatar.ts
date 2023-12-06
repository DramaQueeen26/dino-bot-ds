import { ColorResolvable, EmbedBuilder, SlashCommandBuilder } from 'discord.js';
import { SlashCommand } from '../../../interfaces';
import { envs } from '../../../config/plugins/envs.plugin';

const command: SlashCommand = {
  data: new SlashCommandBuilder()
  .setName('avatar')
  .addUserOption( option => option.setName('target').setDescription('The user whose avatar you want to see') )
  .setDescription(`Returns the user's avatar`),
  execute: interaction => {
    
    try {

      const user = interaction.options.getUser('target')
    
      if( user ) {

        const embed = new EmbedBuilder()
        .setTitle(`${user.username}'s avatar is`)
        .setColor(envs.INFO_COLOR as ColorResolvable)
        .setImage(user.displayAvatarURL({ size: 4096 }))

        return interaction.reply({embeds: [ embed ]})

      }
      
    } catch (error) {

      throw new Error(`${error}`)
      
    }

    
  }
}

export default command