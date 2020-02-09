import React from 'react'
import './Note.css'

function Note({note, onDelete, onEdit}) {
    let prevPosition = {      
        x: 0,  
        y: 0
    };

    function onTextEdit(e){        
        onEdit(note.id, { [e.target.name]: e.target.value});
    }

    function getNoteStyle(){
        const {x, y} = note;
        return {
            ...noteStyle,
            left: x,
            top: y
        };
    }

    function startDrag(e){
        prevPosition = {
            x: e.clientX,
            y: e.clientY
        };
        document.addEventListener('mousemove', drag);
        document.addEventListener('mouseup', stopDrag);
    }

    function stopDrag(e){
        document.removeEventListener('mousemove', drag);
        document.removeEventListener('mouseup', stopDrag);
    }

    function drag(e){
        const {x, y} = note;

        onEdit(note.id, {
            x: x + (e.clientX - prevPosition.x),
            y: y + (e.clientY - prevPosition.y)
        });
    }

    return (
        <div style ={getNoteStyle()} onMouseDown={startDrag}>
            <button className='btnDelete' onClick={onDelete.bind(null, note)}>x</button>
            <textarea
                name='text'
                value={note.text}
                onChange={onTextEdit}
                rows="6"
            />
        </div>
    )
}

export default Note

const noteStyle ={
    position: 'absolute',
    height:'150px',
    width: '130px',
    borderRadius: '4px',
    backgroundColor:'#f6e5e4',
    boxShadow: '5px 5px 15px 0 rgba(0, 0, 0, .2)',
    overflow: 'hidden'
}