import {React, useState} from 'react'
import './Filter.css'

export default function FilterById(props) {
    const regex = /^[0-9\b]+$/;
    const [errID, setErrID]=useState("") 
    const handleInput=e=>{
        const value=e.target.value;
            if(regex.test(value)){
                setErrID("")
            }else{
                setErrID("ID must be number only")
            }
        props.setID(value)

    }
    return (
        <>
            <input className='px-2 col-12 input-admin' value={props.id} onChange={handleInput} placeholder='Input ID User Here'></input>
            <p className='error-id'>{errID}</p>
        </>
    )
}
