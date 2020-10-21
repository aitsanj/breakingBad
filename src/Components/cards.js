import React from 'react';

import './cards.css';
const Card = ({name,img,status, openModal})=>{
    
    return(
        <div className="containerCard">
          
            <img className="cardImg" src={img}/>
            <p>{name}</p>
            <p>{status}</p>
            <button onClick={openModal}>Get quotes</button>
        </div>
    )
};
export  default Card;