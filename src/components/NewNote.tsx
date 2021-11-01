import React, { ChangeEvent, useState } from "react";

interface NewNoteProps {
    addNote(note:string) : void;
}

const NewNote : React.FC<NewNoteProps> = ({addNote}) => {
    const [note, setNote] = useState('');


    const handlUpdateValue = (event : ChangeEvent<HTMLInputElement>) => {
      setNote(event.target.value);
    }

    const handleAddNote = () => {
        addNote(note);
        setNote("");
    };

    return (
        <div>
            <input type="text" name="note" placeholder="Add Notes..." onChange={handlUpdateValue} value={note} />
            <button onClick={handleAddNote} >Add Notes</button>
        </div>
    )
}

export default NewNote
