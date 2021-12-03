import React from 'react'
import './HistoryDetail.css'
import HistoryDetailOne from './HistoryDetailOne'



export default function HistoryDetail(props) {
    const listHistory=props?.data
    console.log(listHistory)
    return (
        <div className='mt-5'>
            {listHistory?.map((item)=><HistoryDetailOne Date={item?.date} TransactionID={item?.id} Type={item?.transaction_type?.name} Desc={item?.desc} Nominal={item?.nominal}/>)}
        </div>
    )
}
