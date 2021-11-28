import React from 'react'

export default function WhyOne(props) {
    return (
        <div className='col-4 d-flex flex-row p-3'  >
            <div className='image col-2'>
                <image url='{props.image}'/>
                
            </div>
            <div className='ms-2'>
                <p className='text-capitalize fs-5 fw-bolder'>{props.title}</p>
                <p className='p-0'>{props.desc}</p>
            </div>
            
        </div>
    )
}
