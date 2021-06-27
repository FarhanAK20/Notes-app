import React from 'react'
import Note from './Note';
import AddNotes from '../AddNotes';
const NotesList =({notes,handleAddNotes,DeleteNote})=>{
    return(
        <div className="notes-list">
            {notes.map((note)=>{
               return <Note id={note.id} text={note.text} date={note.date} DeleteNote={DeleteNote}/>
            })}
            <AddNotes handleAddNotes={handleAddNotes}/>
        </div>
    )
}

export default NotesList;