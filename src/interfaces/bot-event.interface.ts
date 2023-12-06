import { ClientWithCommands } from './client-commands.interface';

export interface BotEvent {
  name: string,
  once?: boolean | false,
  execute: (client: ClientWithCommands, ...args: any[]) => void
}