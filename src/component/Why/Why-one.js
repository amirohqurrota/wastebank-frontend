import React from 'react'
import imgOne from './image/age-group.png'

export default function WhyOne(props) {
    return (
        <div className='col-4 d-flex flex-row p-3'  >
            {/* <div className='image col-2'> */}
                <img src={imgOne} className=' col-2 image-one' alt="kk"/>
                
            {/* </div> */}
            <div className='ms-2'>
                <p className='text-capitalize fs-5 fw-bolder'>{props.title}</p>
                <p className='p-0'>{props.desc}</p>
            </div>
            
        </div>
    )
}
