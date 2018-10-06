import { combineReducers } from 'redux';
import { ActionType } from 'typesafe-actions';

import * as cmd from './actions';
import { ADD, NEW_COMMAND, NEW_FAMILY_HISTORY } from './constants';
import patientData from './patients';

export type CMDAction = ActionType<typeof cmd>;

export type CMDState = {
  readonly reduxCounter: number;
  readonly cmdLog: string[];
  readonly patientData: any;
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
  },
  patientData: (state = patientData, action) => {
    console.log(action.payload);
    switch (action.type) {
      case NEW_FAMILY_HISTORY:
        const newState = {
          ...state,
          patients: [
            {
              ...state.patients[0],
              family_history: [
                ...state.patients[0].family_history,
                {
                  relation: action.payload.relation,
                  condition: action.payload.condition
                }
              ]
            },
            ...state.patients.slice(1)
          ]
        }
        return newState;
        // return {
        //   patients: [
        //     {
        //       ...state.patients[0],
        //       family_history: [
        //         ...state.patients[0].family_history,
        //         {
        //           relation: 'Uncle',
        //           condition: action.payload
        //         }
        //       ]
        //     },
        //     ...state.patients.slice(1)
        //   ]
        // }
      default:
        return state;
    }
  }
});