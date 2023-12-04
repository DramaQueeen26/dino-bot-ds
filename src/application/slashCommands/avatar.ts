import { SlashCommandBuilder } from 'discord.js';
import { SlashCommand } from '../../interfaces';

const avatar: SlashCommand = {
  data: new SlashCommandBuilder()
  .setName('avatar')
  .addUserOption( option => option.setName('target').setDescription('The user whose avatar you want to see') )
  .setDescription(`Returns the user's avatar`),
  execute: interaction => {
    
    const user = interaction.options.getUser('target')
    if( user ) return interaction.reply(`${user.username}'s avatar is ${user.displayAvatarURL()}`)
    return interaction.reply(`Your avatar is ${ interaction.user.displayAvatarURL() }`)

  }
}

export default avatar