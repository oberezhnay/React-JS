import React, { useState, useEffect } from 'react'
import Note from '../Note/Note';
import './NotesField.css'

function NotesField() {
    const [notes, setNotes]= useState([]);

    useEffect(() =>{
        setNotes (restoreState());
    }, [])

    useEffect(() =>{
        saveStorage (notes);
    }, [notes])

    function onBtnAddNote (){
        const newNotes = [
            ...notes,
            {
                id: Date.now(),
                text: '',
                x: randomBetween(0, window.innerWidth - 200),
                y: randomBetween(0, window.innerHeight -200)
            }
        ];
        setNotes(newNotes);  
    }

    function randomBetween(x, y) {
        return (x + Math.ceil(Math.random() * (y-x)))
    }

    function deleteNote(note){
        const newNotes = notes.filter(el => el !== note);
        
        setNotes(newNotes);
    }

    function editNote(id, editedData){
    
        let note = notes.find(el => el.id === id)

        note = {
            ...note,
            ...editedData
        }
        
       const newNotes = notes.map(el => el.id === note.id ? note:el);

       setNotes(newNotes);
    }

    return (
        <div className='field'>
            <div>
            { notes.map(note => 
                <Note
                    key = {note.id}
                    note = {note}
                    onDelete = {deleteNote}
                    onEdit = {editNote}
                 />
                )
            }
            </div>
        <button className='btnNewNote' onClick={onBtnAddNote}>Add New Note</button>
        </div>
    )
}

function restoreState(){
    const notes =localStorage.getItem('notes');

    return notes ? JSON.parse(notes):[];
}

function saveStorage(data){
    localStorage.setItem('notes', JSON.stringify(data));
}
export default NotesField;