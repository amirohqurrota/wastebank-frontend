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

export default function HistoryDetail(props) {
    const listHistory=props?.data
    console.log(listHistory)
    return (
        <div className='mt-5'>
            {listHistory.map((item)=><HistoryDetailOne Date={item?.date} TransactionID={item?.id} Type={item?.transaction_type?.name} Desc={item?.desc} Nominal={item?.nominal}/>)}
        </div>
    )
}
