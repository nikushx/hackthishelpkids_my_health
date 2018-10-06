import { combineReducers } from 'redux';
import { ActionType } from 'typesafe-actions';

import * as cmd from './actions';
import { ADD, NEW_COMMAND } from './constants';

export type CMDAction = ActionType<typeof cmd>;

export type CMDState = {
  readonly reduxCounter: number;
  readonly cmdLog: string[];
};

export default combineReducers<CMDState, CMDAction>({
  reduxCounter: (state = 0, action) => {
    switch (action.type) {

      case ADD:
        return state + action.payload; // action: { type: "ADD"; payload: number; }

      default:
        return state;
    }
  },
  cmdLog: (state = [ 'please type /help for list of commands' ], action) => {
    switch (action.type) {
      case NEW_COMMAND:
        return [
          ...state,
          action.payload
        ]
      default:
        return state;
    }
  }
});