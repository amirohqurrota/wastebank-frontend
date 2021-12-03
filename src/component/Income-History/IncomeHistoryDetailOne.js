import React from 'react'

export default function HistoryDetailOne(props) {
    return (
        <div className='containerDetailOne p-3'>
            <div className='d-flex align-items-center'>
                <p className='fs-6 me-3 text-capitalize '>waste  :</p>
                <p>{props.detail}</p>
            </div>
            {/* <div className='d-flex col-6  justify-content-between'>
                <p>Rp {props.nominal}</p>
                <p>{props.total} kg of waste</p>
            </div> */}
        </div>
    )
}
