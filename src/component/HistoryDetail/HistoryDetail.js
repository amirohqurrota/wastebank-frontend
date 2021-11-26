import React from 'react'
import './HistoryDetail.css'
import HistoryDetailOne from './HistoryDetailOne'

const listHistoryUser=[
    {
        Date:'dd/mm//yy',
        TransactionID: '1239439494985u43u58u34uhf48u84u',
        Type : 'cash out',
        Desc : 'Debit to Bank Account',
        Nominal : 1000000
    },
    {
        Date:'dd/mm//yy',
        TransactionID: '1239439494985u43u58u34uhf48u84u',
        Type : 'cash out',
        Desc : 'Debit to Bank Account',
        Nominal : 1000000
    },
    {
        Date:'dd/mm//yy',
        TransactionID: '1239439494985u43u58u34uhf48u84u',
        Type : 'cash out',
        Desc : 'Debit to Bank Account',
        Nominal : 1000000
    },
    {
        Date:'dd/mm//yy',
        TransactionID: '1239439494985u43u58u34uhf48u84u',
        Type : 'cash out',
        Desc : 'Debit to Bank Account',
        Nominal : 1000000
    },
    {
        Date:'dd/mm//yy',
        TransactionID: '1239439494985u43u58u34uhf48u84u',
        Type : 'cash out',
        Desc : 'Debit to Bank Account',
        Nominal : 1000000
    },
    {
        Date:'dd/mm//yy',
        TransactionID: '1239439494985u43u58u34uhf48u84u',
        Type : 'cash out',
        Desc : 'Debit to Bank Account',
        Nominal : 1000000
    }
]

export default function HistoryDetail() {
    return (
        <div className='mt-5'>
            {listHistoryUser.map((item)=><HistoryDetailOne Date={item.Date} TransactionID={item.TransactionID} Type={item.Type} Desc={item.Desc} Nominal={item.Nominal}/>)}
        </div>
    )
}
