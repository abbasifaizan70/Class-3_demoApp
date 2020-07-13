import React from 'react'
import './App.css';

function Child(props){
    return(
        <div class="div-1">
            <h1 class="h1-01">My Name is {props.name}.</h1>
            <p class="p-01">I am Doing {props.degree}.</p>
        </div>
    )
}

export default Child;