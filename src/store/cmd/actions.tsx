import { action } from 'typesafe-actions';
import { ADD, NEW_COMMAND, NEW_FAMILY_HISTORY } from './constants';

export type RelationCondition = {
  condition: string;
  relation: string;
}

export const add = (amount: number) => action(ADD, amount);
export const newCommand = (cmd: string) => action(NEW_COMMAND, cmd);
export const newFamilyHistory = (relationCondition: RelationCondition) => action(NEW_FAMILY_HISTORY, relationCondition);