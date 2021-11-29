import React from 'react'

export default function userData(props) {
    return (
        <div className={props.data?'col-8 bg-light align-self-end input-admin mt-3 p-4':'none'}>
            {/* <h1>dd</h1> */}
            <tr>
                <td className='pe-4'>ID User </td>
                <td className='pe-2'>: </td>
                <td>{props?.data?.id}</td>
            </tr>
            <tr>
                <td className='pe-4'>Username </td>
                <td className='pe-2'>: </td>
                <td>{props?.data?.username}</td>
            </tr>
            <tr>
                <td className='pe-4'>Name </td>
                <td className='pe-2'>: </td>
                <td>{props?.data?.first_name} {props?.data?.last_name}</td>
            </tr>
            <tr>
                <td className='pe-4'>Address </td>
                <td className='pe-2'>: </td>
                <td>Jl teku taka teki no 12 kotatua-Jawa Timur</td>
            </tr>
            <tr>
                <td className='pe-4'>No Telp </td>
                <td className='pe-2'>: </td>
                <td>{props?.data?.telephone}</td>
            </tr>
        </div>
    )
}
