import React, { useState } from 'react';
import Note from "./Note";
import CreateArea from "./CreateArea";


function Container() {

    const [notes, setNote] = useState([]);

    function getNote(note) {
        setNote((prev) => [...prev, note])
    }

    function deleteNote(noteId) {
        const newNote = notes.filter((note, noteIndex) => {
            return noteIndex !== noteId;
        })
        setNote(newNote);
    }

    return (
        <div>
            <CreateArea onAdd={getNote} />
            {notes.map((note, noteIndex) => {
                const cutString = note.content.substring(0, 50);
                return <Note
                    key={noteIndex}
                    id={noteIndex}
                    onDelete={deleteNote}
                    title={note.title}
                    content={cutString}
                />
            })}
        </div>
    )
}

export default Container