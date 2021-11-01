import React from 'react';
import { useSelector, useDispatch } from "react-redux";
import './App.css';
import NewNote from './components/NewNote';
import { addNote } from './redux/actions/action';
import { NoteState } from './redux/reducer/noteReducer';

function App() {

  const note = useSelector<NoteState, NoteState['note']>((state) => state.note);

  const dispatch = useDispatch();

  const onAddNote = (note : string) => {
    dispatch(addNote(note))
  }


  return (
    <>
       <h3>NoteBook</h3>
       <NewNote addNote={onAddNote} />
       <hr/>
       <ul>
         {note.map((note) => {
           return <li key={note}>{note}</li>
         })}
       </ul>
     </>
     
  );
}

export default App;
