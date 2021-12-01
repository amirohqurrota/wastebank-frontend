import React from 'react'
import HistoryOne from './IncomeHistoryOne'
import './IncomeHistory.css'



export default function IncomeHistory(props) {
    return (
        <div className='d-flex flex-column align-items-center why my-5'>
        <p className='text-capitalize fs-2 fw-bold'>Income History</p>
        <div className='d-flex col-10 scroll-horizontal'>
            {props?.data?.map((item)=><HistoryOne month={item.date} nominal={item.nominal} totalWaste={item.total_height} detail={item.desc}/>)}
        </div>
    </div>
    )
}
