import React from 'react';
import './Modal.css';
import Backdrop from './BackDrops/BackDrop'

const Modal = ({show,close,quote,name}) =>{
    return (
        <div>
            <Backdrop
                show = {show}
                clicked={close}
            />
           
            <div
                className="Modal"
                style={{
                  transform: show ? 'translateY(0)' : 'translateY(-100vh)',
                  opacity: show ? '1' : '0'
                }}
            >  
            <h2>{name}</h2>
            <p>{quote}</p>
            
            <button onClick={close} variant="danger">Close</button> 
            </div>
        </div> 
    )
}
export default Modal;