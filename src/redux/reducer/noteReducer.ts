import { Action } from "../actions/action";

export interface NoteState {
    note : string[];
}

const initialState = {
    note: []
};


export const noteReducer = (
    state : NoteState = initialState,
    action : Action,
) => {
    switch (action.type) {
      case "ADD_NOTE":{
          return { ...state, note : [...state.note, action.payload]}
      }
        
      default: return state;
    }
}