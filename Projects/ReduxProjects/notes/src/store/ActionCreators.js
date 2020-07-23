import * as Actions from "./Actions";
import {createStore} from "redux";
import omit from "lodash/omit";

let id = 0;
function NotesCreators(state = [], action) {
  switch (action.type) {
    case Actions.CREATE_NOTES:
      return [
        ...state,
        {
          id: ++id,
          description: action.payload,
        },
      ];

    case Actions.DELETE_NOTES:
      return state.filter((x) => x.id !== action.payload);

    default:
      return state;
  }
}

export function AddNotes(description) {
  return {
    type: Actions.CREATE_NOTES,
    payload: description,
  };
}

export function DeleteNotes(id) {
  return {
    type: Actions.DELETE_NOTES,
    payload: id,
  };
}

export const store = createStore(NotesCreators);
