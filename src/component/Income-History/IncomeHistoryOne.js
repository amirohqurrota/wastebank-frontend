import React from 'react'
import HistoryDetailOne from './IncomeHistoryDetailOne'
import useState from 'react-hook-use-state'


export default function HistoryOne(props) {
    const [detailBool, setDetailBool]=useState(false)
    const appearDetail=()=>{
        setDetailBool(!detailBool)
    }
    const arrDetail = props.detail.split(";")
    console.log(arrDetail, "array")

    return (
        <div className="relative">
            <div className="bg-light history-one me-4 ms-4 col-3 square  p-3 d-flex flex-column shadow mb-5 bg-body">
                <p className='fs-6 fw-normal'>{props.month}</p>
                <p className='text-md-end fs-2 fw-bolder'>{props.nominal}</p>
                <p className='text-end fs-6 fst-italic fw-light pt-n2'>{props.totalWaste} kg of waste</p>
                <button className='back-color-green  button-detail align-self-end' onClick={appearDetail} data-bs-toggle="collapse" data-bs-target="#collapseWidthExample" aria-expanded="false" aria-controls="collapseWidthExample">detail</button>
            </div>
            <div className={detailBool?'d-flex flex-column apear-active containerDetail collapse collapse-horizontal shadow mb-5 bg-body mt-n2 collapse-income ':'appear-nonActive bg-dark'} id="collapseWidthExample" >
                {/* <p className="detail-popup fw-bolder">DETAIL :</p> */}
                <button type="button" class="btn-close align-self-end me-2 mt-2" aria-label="Close" onClick={appearDetail}></button>
                {arrDetail.map((item)=><HistoryDetailOne detail={item}/>)}
            </div>

        </div>
        
    )
}
