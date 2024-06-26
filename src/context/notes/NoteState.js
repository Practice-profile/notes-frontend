import React, { useContext, useState } from 'react'
import noteContext from './noteContext'
import alertContext from '../alert/alertContext'

const NoteState = (props) => {
    const host = 'https://notes-backend-uzu9.onrender.com.'      
    const context = useContext(alertContext)
    const {getAlert} = context

    const [notes, setNotes] = useState([])

    // GET ALL NOTES...
    const getNotes = async () =>{
        const token = localStorage.getItem("token")
        const response = await fetch(`${host}/api/notes/fetchallnotes`, {
            method: 'GET',
            headers:{
                'Content-Type': 'application/json',
                'token': token
            },
        })
        const data = await response.json()
        setNotes(data)
    }

    // ADD A NEW NOTE...
    const addNote = async (newNote)=>{
        const token = localStorage.getItem("token")
        const response = await fetch(`${host}/api/notes/addnote`, {
            method: 'POST',
            headers:{
                'Content-Type': 'application/json',
                'token': token
            },
            body: JSON.stringify(newNote)
        })
        
        const data = await response.json()
        setNotes(notes.concat(data))
        getAlert("success", "New note successfully added")
    }

    // DELETE NOTE...
    const deleteNote = async (id) => {
        const token = localStorage.getItem("token")
        const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
            method: 'DELETE',
            headers:{
                'Content-Type': 'application/json',
                'token': token
            },
        })

        const data = await response.json()
        console.log(data)
        const newNotes = notes.filter((note) =>{return note._id !== id})
        setNotes(newNotes)
        getAlert("success", "Note successfully deleted")
    }

    // EDIT A NOTE...
    const updateNote = async (note)=>{
        const token = localStorage.getItem("token")
        const {e_title, e_description, e_tag} = note
        const response = await fetch(`${host}/api/notes/updatenote/${note.id}`, {
            method: 'PUT',
            headers:{
                'Content-Type': 'application/json',
                'token': token
            },
            body: JSON.stringify({title: e_title, description: e_description, tag: e_tag})
        })
        
        const data = await response.json()
        
        setNotes((prevNotes)=> prevNotes.map((prevNote)=>{
            if(prevNote._id === data._id){
                return data
            }
            else{
                return prevNote
            }
        }))
        getAlert("success", "Note successfully updated")
    }

    return (
        <noteContext.Provider value={{notes, setNotes, addNote, deleteNote, updateNote, getNotes}}>
            {props.children}
        </noteContext.Provider>
    )
}

export default NoteState
