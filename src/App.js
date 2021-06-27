import React,{useState,useEffect} from 'react'
import {nanoid} from 'nanoid';
import NotesList from './Components/NotesList'
import Search from './Components/Search';
import Header from './Components/Header';
const App =()=>{
    const [notes,setNotes] = useState([]);
    useEffect(() => {
        const savedNotes = JSON.parse(localStorage.getItem('react-notes-data'))
        if(savedNotes){
            setNotes(savedNotes)
        }
    }, [])

  useEffect(() => {
      localStorage.setItem('react-notes-data',JSON.stringify(notes));

  }, [notes])
const[query,setQuery] = useState('')
const [darkMode,setDarkMode] = useState(false)


    const addNote =(text)=>{
        const date = new Date();
        const newNote ={
            id: nanoid(),
            text: text,
            date: date.toLocaleDateString()
        }
        const newNotes = [...notes,newNote]
        setNotes(newNotes)
    }
    const deleteNote =(id)=>{
        const newNotes = notes.filter((note)=> note.id!==id);
        setNotes(newNotes)
    }
    return(
        <div className={`${darkMode && 'dark-mode'}`}>
        <div className="container">
            <Header handleToggle={setDarkMode}/>
            <Search handleSearch={setQuery}/>
            <NotesList notes={notes.filter((note)=> note.text.includes(query))} handleAddNotes={addNote} DeleteNote={deleteNote}/>
        </div>
        </div>
    )
}

export default App;