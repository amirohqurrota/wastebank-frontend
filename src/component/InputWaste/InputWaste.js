import {React,useState} from 'react'
import InputOne from './InputOne'

import './Input.css'


export default function InputWaste(props) {
    const {transactionId,listWaste,setListWaste,concatWaste,setConcatWaste,setTotal}=props
    const [count,setCount]=useState([1])

    const addHandle=()=>{
        setCount(count.concat([1]))
        console.log(count)
    }
    
    return (
        <>
            {count.map((x)=><InputOne listWaste={listWaste} setListWaste={setListWaste} concatWaste={concatWaste} setConcatWaste={setConcatWaste} setTotal={setTotal} />)}
            <button className='align-self-center button-input-admin back-color-green px-3 py-1' onClick={addHandle}>add more waste +</button>
        </>
    )
}
