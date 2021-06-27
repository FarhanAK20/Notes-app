import { useState } from "react";

const AddNotes =({handleAddNotes})=>{
    const [noteText,setNoteText] = useState('');
    const CharacterLimit = 200;
    const handleChange =(e)=>{
        if(CharacterLimit-e.target.value.length>=0){
            setNoteText(e.target.value)
        }
    }
    const handleSaveClick =()=>{
        if(noteText.trim().length>0){
            handleAddNotes(noteText);
            setNoteText('')
        }
    }

    return(
        <div className="note new">
            <textarea rows="8"
            cols="10"
            placeholder="type to add a note"
            value={noteText}
            onChange={handleChange}></textarea>
            <div className="note-footer">
                <small>{CharacterLimit-noteText.length} remaining</small>
                <button className="save" onClick={handleSaveClick}>Save</button>
            </div>
        </div>
    );
}

export default AddNotes;