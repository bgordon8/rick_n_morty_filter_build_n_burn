import React from 'react'

export default function Card({ character }){
    return (
        <div className="card" id={ character.name.replace(/ /g, '-').toLowerCase()}>
            <img src={character.image} alt={`${character.name}`}/>
            <h3>{character.name}</h3> 
        </div>
    )
}