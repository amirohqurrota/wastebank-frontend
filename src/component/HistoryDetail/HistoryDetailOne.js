import React from 'react'

export default function HistoryDetailOne(props) {
    return (
        <div className='d-flex flex-row align-items-end justify-content-between container-detail-one col-9 ms-auto me-auto pt-2'>
            <div>
                <p className='fw-bold fs-5'>{props.Date}</p>
                <tr>
                    <td>Transaction ID</td>
                    <td className='ps-2'>:</td>
                    <td>{props.TransactionID}</td>
                </tr>
                <tr>
                    <td>Type</td>
                    <td className='ps-2 pe-2'>:</td>
                    <td>{props.Type}</td>
                </tr>
                <tr>
                    <td>Description</td>
                    <td className='ps-2 pe-2'>:</td>
                    <td>{props.Desc}</td>
                </tr>
            </div>
            <div>
                <p className='fw-bold fs-5 align-self-end'> Rp {props.Nominal}</p>
            </div>
        </div>
    )
}
