import { Collection, REST, Routes } from 'discord.js'
import { readdirSync } from 'fs'
import { join } from 'path'
import { envs } from '../../config/plugins/envs.plugin'
import { ClientWithCommands, SlashCommand } from '../../interfaces';

export class CommandsHandler {

  private readonly client: ClientWithCommands
  private readonly slashCommandsPath: string
  private readonly slashCommandsCategories: string[]
  private readonly slashCommands: any[]

  constructor( client: ClientWithCommands ) {
    this.client = client
    this.slashCommandsPath = join( __dirname, "../../application/slashCommands" )
    this.slashCommandsCategories = readdirSync( this.slashCommandsPath )
    this.slashCommands = []
  }

  init() {

    this.client.slashCommands = new Collection<string, SlashCommand>()

    this.slashCommandsCategories.forEach( category => {

      // * Cargar los slash commands
      readdirSync( `${this.slashCommandsPath}/${category}` ).filter( file => file.endsWith( '.ts' ) )
      .forEach( file => {
        const command = require( `${ this.slashCommandsPath }/${category}/${ file }` ).default
        this.slashCommands.push( command.data )
        this.client.slashCommands.set( command.data.name, command )
      })
    
    })

    const rest = new REST( { version: "10" } ).setToken( envs.TOKEN )

    rest.put( Routes.applicationCommands( envs.CLIENT_ID ), {
      body: this.slashCommands.map( command => command.toJSON() )
    })
    .then( ( data: any ) => {
        console.log( `Loaded ${ data.length } slash command(s)` )
    })
    .catch( error => {
        console.log( `Error: ${error}` )
    })

  }

}