import { createStore } from "redux";
import { noteReducer } from "./reducer/noteReducer";

export const store = createStore(
  noteReducer,
  (window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__()
);