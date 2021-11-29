import React from 'react'
import './RecapElement.css'


export default function RecapDataElement(props) {
    return (
        <>
            <div className='d-flex col-9 mt-4 ms-auto me-auto recap-element justify-content-between '>
                <div>
                <tr>
                    <td>User ID</td>
                    <td className='ps-2'>:</td>
                    <td>{props.item.id_user}</td>
                </tr>
                <tr>
                    <td>Transaction ID</td>
                    <td className='ps-2'>:</td>
                    <td>{props.item.id}</td>
                </tr>
                <tr>
                    <td>Type</td>
                    <td className='ps-2 pe-2'>:</td>
                    <td>{props.item.transaction_type.name}</td>
                </tr>
                <tr>
                    <td>Detail</td>
                    <td className='ps-2 pe-2'>:</td>
                    <td>{props.item.desc}</td>
                </tr>
                <tr>
                    <td>Nominal</td>
                    <td className='ps-2 pe-2'>:</td>
                    <td>{props.item.nominal}</td>
                </tr>
                </div>
                <div>
                    <p className='fw-bold fs-5 align-self-end'>{props.item.date}</p>
                </div>
            </div>
        </>
    )
}
