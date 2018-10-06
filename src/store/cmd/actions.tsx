import { action } from 'typesafe-actions';
import { ADD, NEW_COMMAND } from './constants';

export const add = (amount: number) => action(ADD, amount);
export const newCommand = (cmd: string) => action(NEW_COMMAND, cmd);