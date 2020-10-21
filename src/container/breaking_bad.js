import React, { useEffect, useState } from 'react';
import Card from '../Components/cards';
import Axios from 'axios';
import './breaking_bad.css'
import Modal from '../Components/UI/Modal';
const BreakingBad =()=>{
    const [breakingBadData,setBreakingBadData]=useState([]); 
    const [quote, setQuote]=useState([]);
    const [showModal,setShowModal]=useState({showModal:false})
    useEffect(()=>{
        Axios.get('https://www.breakingbadapi.com/api/characters?limit=10&offset=0')
        .then(response=>{
        setBreakingBadData(response.data);
        }).catch(error=>{
            console.log(error);
        },breakingBadData);
    });  

    const closedModal=()=>{
        setShowModal({showModal:false})
    } 
    const openModal=(name)=>{        
        Axios.get('https://www.breakingbadapi.com/api/quote/random?author='+name)
        .then(response=>{
            setQuote([response.data[0].quote, response.data[0].author]);
        }).catch(e=>{
            console.log(e)
        });
        setShowModal({showModal:true});
        console.log(quote);
    }
    return( 
        <div>
        <Modal
            show={showModal.showModal}
            close={closedModal}
            quote = {quote[0]}
            name={quote[1]}
            
        />
        <div className="container">  
        
            {breakingBadData.map((scene,index)=>{
                return(
                    <Card
                        key={index}
                        name={scene.name}
                        img={scene.img}
                        status={scene.status}
                        openModal={(name)=>openModal(scene.name)}
                    />
                )
            })}       
        </div>
        </div>
    )
 
   
};

export default BreakingBad;