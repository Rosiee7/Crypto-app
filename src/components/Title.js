import '../App.css';
import React from 'react'


function Title({name}) {
    return (
        <div>
            <h1 className="title">{name}</h1>
        </div>
    )
}

export default Title