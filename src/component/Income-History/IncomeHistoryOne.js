import React from 'react'
import HistoryDetailOne from './IncomeHistoryDetailOne'
import useState from 'react-hook-use-state'

export default function HistoryOne(props) {
    const [detailBool, setDetailBool]=useState(false)
    const appearDetail=()=>{
        setDetailBool(!detailBool)
    }

    const listDetail=[
        {
            name:'waste deposit',
            nominal:19.000,
            total:3,
            date:'3/12/2021'
        },
        {
            name:'waste deposit',
            nominal:19.000,
            total:3,
            date:'3/12/2021'
        },
        {
            name:'waste deposit',
            nominal:19.000,
            total:3,
            date:'3/12/2021'
        },
        {
            name:'waste deposit',
            nominal:19.000,
            total:3,
            date:'3/12/2021'
        },
        {
            name:'waste deposit',
            nominal:19.000,
            total:3,
            date:'3/12/2021'
        }
    ]

    return (
        <div>
            <div className="bg-light history-one me-4 ms-4 col-3 square  p-3 d-flex flex-column shadow mb-5 bg-body">
                <p className='fs-5 fw-normal'>{props.month}</p>
                <p className='text-md-end fs-2 fw-bolder'>{props.nominal}</p>
                <p className='text-end fs-6 fst-italic fw-light pt-n2'>{props.totalWaste} kg of waste</p>
                <button className='back-color-green  button-detail align-self-end' onClick={appearDetail} data-bs-toggle="collapse" data-bs-target="#collapseWidthExample" aria-expanded="false" aria-controls="collapseWidthExample">detail</button>
            </div>
            <div className={detailBool?'apear-active containerDetail collapse collapse-horizontal shadow mb-5 bg-body mt-n2':'appear-nonActive'} id="collapseWidthExample" >
                {listDetail.map((item)=><HistoryDetailOne name={item.name} nominal={item.nominal} total={item.total} date={item.date}/>)}
            </div>

        </div>
        
    )
}
