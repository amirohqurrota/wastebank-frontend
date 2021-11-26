import React from 'react'
import HistoryOne from './IncomeHistoryOne'
import './IncomeHistory.css'

const HistoryList=[
    {
        month:"Januari",
        nominal:"123.000",
        totalWaste:23
    },
    {
        month:"Januari",
        nominal:"123.000",
        totalWaste:23
    },
    {
        month:"Januari",
        nominal:"123.000",
        totalWaste:23
    },
    {
        month:"Januari",
        nominal:"123.000",
        totalWaste:23
    },
    {
        month:"Januari",
        nominal:"123.000",
        totalWaste:23
    },
    {
        month:"Januari",
        nominal:"123.000",
        totalWaste:23
    },
    {
        month:"Januari",
        nominal:"123.000",
        totalWaste:23
    },
    {
        month:"Januari",
        nominal:"123.000",
        totalWaste:23
    }
]

export default function IncomeHistory() {
    return (
        <div className='d-flex flex-column align-items-center why my-5'>
        <p className='text-capitalize fs-2 fw-bold'>Income History</p>
        <div className='d-flex col-10 scroll-horizontal'>
            {HistoryList.map((item)=><HistoryOne month={item.month} nominal={item.nominal} totalWaste={item.totalWaste}/>)}
        </div>
    </div>
    )
}
