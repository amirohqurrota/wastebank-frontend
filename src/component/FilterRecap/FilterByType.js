import React from 'react'
import './Filter.css'

export default function FilterByType(props) {
    const handleInput=e=>{
        const value=e.target.value;
        props.setIdType(value)
        // console.log("idType",props.idType)

    }
    return (
        <>
            <select className='input-admin px-2 col-12' onChange={handleInput}>
                {/* <option id='select-filter' selected disabled>select type..</option> */}
                <option value={props.idType} selected disabled hidden className='disabled-option'>Choose Type</option>
                <option id='select-filter' value='1'>Waste Deposit</option>
                <option id='select-filter' value="2">Debit</option>
            </select>
        </>
    )
}
