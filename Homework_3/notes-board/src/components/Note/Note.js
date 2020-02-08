// import React from 'react'
import React, { useState, useEffect } from 'react'

function Note(props) {
    const [position, setPosition]= useState({      
        x: 100,  
        y: 100
    })
    
    useEffect(() =>{
        console.log('effect')
        function onClick (e){
            setPosition({       
                x: e.x-25,
                y: e.y-25
            })          
        }
        document.addEventListener('mousedown', onClick)
        
        return () =>{     
            console.log('uneffect');
            document.removeEventListener('click', onClick);
        }
    }, []);                     

    return (
        <div style ={{ 
            ...noteStyle, 
            top: position.y, 
            left: position.x}}>
                <button>x</button>
        </div>
    )
}



export default Note

const noteStyle ={
    position: 'absolute',
    height:'150px',
    width: '130px',
    borderRadius: '4px',
    backgroundColor:'rgb(167, 231, 238)'
}