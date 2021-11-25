import React from 'react'

export default function HistoryDetailOne(props) {
    return (
        <div className='containerDetailOne p-3'>
            <div className='d-flex  justify-content-between'>
                <p className='fw-bold fs-5'>{props.name}</p>
                <p>{props.date}</p>
            </div>
            <div className='d-flex col-6  justify-content-between'>
                <p>Rp {props.nominal}</p>
                <p>{props.total} kg of waste</p>
            </div>
        </div>
    )
}
