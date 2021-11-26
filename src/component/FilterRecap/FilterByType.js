import React from 'react'
import './Filter.css'

export default function FilterByType() {
    return (
        <>
            <select className='input-admin px-2 col-12'>
                <option id='select-filter' selected value='waste deposit '>Waste Deposit</option>
                <option id='select-filter' value="debit">Debit</option>
            </select>
        </>
    )
}
