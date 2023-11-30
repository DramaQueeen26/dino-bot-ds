import { Client, GatewayIntentBits, REST, Routes } from 'discord.js';
import { envs } from './config/plugins/envs.plugin';

const commands = [
  {
    name: 'hola',
    description: 'Replies with ...',
  },
  {
    name: 'adios',
    description: 'Replies with ...',
  },
];

const rest = new REST({ version: '10' }).setToken(envs.TOKEN);

try {
  console.log('Started refreshing application (/) commands.');

  rest.put(Routes.applicationCommands(envs.CLIENT_ID), { body: commands });

  console.log('Successfully reloaded application (/) commands.');
} catch (error) {
  console.error(error);
}

const client = new Client({ intents: [GatewayIntentBits.Guilds] });

client.on( 'ready', () => {
  console.log( `Logged in as ${ client.user?.username }!` );
  client.user?.setActivity( envs.ACTIVITY );
} );

client.on( 'interactionCreate', async interaction => {
  if ( !interaction.isCommand() ) return;

  const { commandName } = interaction

  console.log(commandName);

  if ( interaction.commandName === 'hola' ) {
    await interaction.reply( 'Sapo' );
  }

  if ( interaction.commandName === 'adios' ) {
    await interaction.reply( 'Nyaa' );
  }

} );

client.login( envs.TOKEN );