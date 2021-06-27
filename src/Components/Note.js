import React from 'react'
import {MdDelete} from 'react-icons/md'
const Note =({id,text,date,DeleteNote})=>{
    return(
        <div className="note">
            <span>{text}</span>
            <div className="note-footer">
                <small>{date}</small>
                <MdDelete className="delete-icon" onClick={()=> DeleteNote(id)}/>
            </div>
        </div>
    )
}

export default Note;