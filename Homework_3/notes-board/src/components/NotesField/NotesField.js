import React, { useState, useEffect } from 'react'
//import React from 'react';
// import ReactDOM from 'react-dom' ;
import Note from '../Note/Note';

function NotesField(props) {
    const [position, setPosition]= useState({  
        noteList: [],
        newNote: {
            text: '',
            x: 100,
            y: 100
        }
    })

    useEffect(() =>{
        console.log('effect')
        function onBtnAddNote (e){
            setPosition({
                noteList: [...newNote],   
                newNote:{
                    text: '1',
                    x: e.x-25,
                    y: e.y-25
                }
            })          
        }
    })

    return (
        <>
        <Note />
        <button onClick={onBtnAddNote}>+</button>
        </>
    )

}

export default NotesField;