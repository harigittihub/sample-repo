import React from 'react'
import {db} from '../firebaseConfig';
import { useState } from 'react';
import {addDoc,collection} from 'firebase/firestore';

const Bill = () => {
    const [name,setName] = useState();
    const [email,setEmail] = useState();
    const [message,setMessage]= useState();

    const userCollectionRef = collection(db,"contactdata")

    const handleSubmit =()=>{
        addDoc(userCollectionRef,{
            name: name,
            email:email,
            message:message,
        }).then(()=>{
            if(!alert("form submitted successfully :)")) document.location="https://www.google.com/"
        }).catch((error)=>{
            alert(error.message)
        })

    }



  return (
    <div className='outer-container'>
        <p>Payment form</p>

        <form className='Billingform'>
            <label>Full name</label>
            <input type='text' placeholder='enter your full name' onChange={(event)=>{
                setName(event.target.value)
            }}/>

            <label>Email</label>
            <input type='email' placeholder='enter your email' onChange={(event)=>{
                setEmail(event.target.value)
            }}/>

            <label>payment rupees</label>
            <input type='text' placeholder='ruppes to be paid' onChange={(event)=>{
                setMessage(event.target.value)
            }}/>

        </form>

        <button onClick={handleSubmit}>Pay Now</button>

    </div>
  )
}

export default Bill