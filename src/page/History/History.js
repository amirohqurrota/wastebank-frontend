import {React, useState} from 'react'
import './History.css'
import HistoryDetail from '../../component/HistoryDetail/HistoryDetail'
import Footer from '../../component/footer/Footer'
import Nav from '../../component/Navbar/Nav'
import {gql, useMutation, useQuery,useLazyQuery, useSubscription} from "@apollo/client";
import Loader from "react-loader-spinner";

const TRANSACTION_HIST_USER=gql`
query transactionHistById {
    transaction(where: {id_user: {_eq: 1}, id_type: {_eq: 1}}) {
      nominal
      date
      desc
      transaction_type {
        name
      }
      id
    }
  }
  `;


const GET_SALDO=gql`
query getSaldo($idUser: Int = 1) {
    transaction_aggregate(where: {id_user: {_eq: $idUser}, transaction_type: {id: {_eq: 1}}}) {
      aggregate {
        sum {
          nominal
        }
      }
    }
  }
`


export default function History() {
    const {loading, error,data: dataHistory}=useQuery(TRANSACTION_HIST_USER);
    const {loadingsaldo, errorsaldo,data : saldo}=useQuery(GET_SALDO);
    const [history, setHistory]=useState()

    // useEffect(() => {
    //     // getDataUser()
    //     // setUserDataBasic(data)
    //     setHistTransaction(dataHistory?.transaction[0])
    //     // console.log(dataTransaction)
    // }, [ dataHistory])

    const emptySearch={
        searchID:"",
        searchDate:""
    }

    const emptyFilter={
        filterType:"",
        filterTimeFrom:"",
        filterTimeTo:""
    }

    let [search, setSearch] = useState(emptySearch)
    let [filter, setFilter] = useState(emptyFilter)
    let [errID, setErrID]=useState("")
    let [errDate, setErrDate]=useState("")
    const listErrorSearch=[errID,errDate]
    const regex = /^[0-9\b]+$/;

    const handleInput=e=>{
        const name= e.target.name;
        const value=e.target.value;

        if (name==='searchID'){
            if(regex.test(value)){
                setErrID("")
            }else{
                setErrID("ID must be number only")
            }
        }
        setSearch({
            ...search,
            [name]: value
        })
        setFilter({
            ...filter,
            [name]: value
        })
    }
    return (
        <div>
            <Nav/>
            {/* <p>{JSON.stringify(dataHistory)}</p> */}
            {/* <p>{JSON.stringify(saldo?.transaction_aggregate?.aggregate?.sum?.nominal)}</p> */}
            <div className='ms-0 back-color-green col-6 d-flex p-5 container-wallet flex-row justify-content-center align-items-center mb-5 shadow'>
                <div className='mt-4 mb-4'>
                    <p className='fs-4'>active balance</p>
                    <p className='fs-6'>ID User : 1234567894k4</p>
                </div>
                <p className='fw-bold fs-3 ms-5'>Rp {saldo?.transaction_aggregate?.aggregate?.sum?.nominal}</p>
                {/* <p className='fw-bold fs-3 ms-5'>Rp {saldo.transaction_aggregate.aggregate.sum.nominal}</p> */}
            </div>
            <div className='d-flex col-11 justify-content-evenly ms-auto me-auto'>
                <div className='d-flex flex-column bg-light col-5 container-filter p-3 shadow p-3 mb-5 bg-body'>
                    <p className='fs-5'>Search By</p>
                    <div className='ps-3'>
                        <div className='d-flex flex-column mt-2 div-input'>
                            <label for>ID</label>
                            <input className='input-history' name='searchID' value={search.id} onChange={handleInput}></input>
                        </div>
                        <div className='d-flex flex-column mt-2 div-input'>
                            <label for>Date</label>
                            <input type='date' className='input-history' name='searchDate' value={search.date} onChange={handleInput}></input>
                        </div>
                        {listErrorSearch.map((message)=>(<span className="errorMessage">{message} <br/></span>))}
                    </div>
                    <button className='back-color-green button-history align-self-end col-2'>search</button>
                </div>
                <div className='p-3 d-flex flex-column bg-light col-5 container-filter shadow p-3 mb-5 bg-body'>
                    <p className='fs-5'>Filter By</p>
                    <div className='ps-3'>
                        <div className='d-flex flex-column mt-2 div-input'>
                            <label for>Type :</label>
                            <select name='filterType' className='input-history-option'>
                                <option value="none" selected disabled hidden className='disabled-option'>Choose Type</option>
                                <option value="cash in">cash in</option>
                                <option value="cash out">cash out</option>
                            </select>
                            {/* <input className='input-history' name='filterType' value={filter.type} onChange={handleInput}></input> */}
                        </div>
                        <div className='d-flex flex-column mt-2 div-input'>
                            <label for>Time Span</label>
                            <div className='d-flex justify-content-evenly'>
                                <div >
                                    <label className='fw-bolder'>From :</label>
                                    <input className='input-history col-8 ms-1' type='date' name='filterTimeFrom' value={filter.timeFrom} onChange={handleInput}></input>   
                                </div>
                                <div>
                                    <label className='fw-bolder'>To :</label>
                                    <input className='input-history col-8 ms-1' type='date' name='filterTimeTo' value={filter.timeTo} onChange={handleInput}></input>   
                                </div>
                            </div>
                            
                        </div>
                    </div>
                    <button className='back-color-green button-history align-self-end col-2'>filter</button>
                </div>
            </div>
            
            <HistoryDetail data={dataHistory?.transaction} />
            <Footer/>
        </div>
    )
}
