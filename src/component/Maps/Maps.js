import React from 'react'
import './Maps.css'
import MapsApi from './MapsApi'

export default function Maps() {
    return (
        <div className='d-flex flex-column align-items-center col-10 mx-auto mt-5 mb-5'>
            <p className='text-capitalize fs-2 fw-bold'>Container in Your Area</p>
            <MapsApi/>
        </div>
    )
}
