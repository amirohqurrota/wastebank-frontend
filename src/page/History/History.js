import {React, useState, useEffect} from 'react'
import './History.css'
import HistoryDetail from '../../component/HistoryDetail/HistoryDetail'
import Footer from '../../component/footer/Footer'
import Nav from '../../component/Navbar/Nav'
import {gql, useMutation, useQuery,useLazyQuery, useSubscription} from "@apollo/client";
import Loader from "react-loader-spinner";
import HistoryDetailOne from '../../component/HistoryDetail/HistoryDetailOne'

const TRANSACTION_HIST_USER=gql`
query transactionHistById {
    transaction(where: {id_user: {_eq: 1}}) {
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

const SEARCH=gql`
query search($idTrans: Int!, $idUser: Int!) {
    transaction(where: {id: {_eq: $idTrans}, id_user: {_eq: $idUser}}){
      nominal
      date
      desc
      transaction_type {
        name
      }
      id
    }
  }
`

const FILTER_TYPE=gql`
query filterByType($idUser: Int = 1, $idType: Int!) {
    transaction(where: {id_user: {_eq: $idUser}, _and: {id_type: {_eq: $idType}}}){
      nominal
      date
      desc
      transaction_type {
        name
      }
      id
    }
    }`

const FILTER_DATE=gql`
query MyQuery8($idUser: Int = 10, $dateFrom: date = "", $dateTo: date = "") {
    transaction(where: {id_user: {_eq: $idUser}, _and: {date: {_gte: $dateFrom}, _and: {date: {_lte: $dateTo}}}}){
      nominal
      date
      desc
      transaction_type {
        name
      }
      id
    }
  }`

export default function History() {
    const {loading, error,data: dataHistory}=useQuery(TRANSACTION_HIST_USER);
    const {loading: loadingsaldo, error: errorsaldo,data : saldo}=useQuery(GET_SALDO);
    const [getHistoryById, {loading : loadingSearch, error:errorSearch, data:dataSearchById}]=useLazyQuery(SEARCH)
    const [filterTypeHistory, {loading : loadingFilterType, error:errorFilterType, data:dataFilterType}]=useLazyQuery(FILTER_TYPE)
    const [filterDateHistory, {loading : loadingFilterDate, error:errorFilterDate, data:dataFilterDate}]=useLazyQuery(FILTER_DATE)
    const [transactionById, setTransactionById]=useState()
    const [transactionByType, setTransactionByType]=useState("default")
    const [transactionByDate, setTransactionByDate]=useState("default")
    const [transactionFiltered, setTransactionFiltered]=useState()


    useEffect(() => {
        setTransactionById(dataSearchById?.transaction[0])
        setTransactionByDate(dataFilterDate?.transaction)
        setTransactionByType(dataFilterType?.transaction)

        if(transactionByDate && transactionByType){
            console.log("cond3")
            setTransactionFiltered(dataFilterType?.transaction.filter((x => dataFilterDate?.transaction.includes(x))))
        }else if(transactionByDate && !transactionByType){
            console.log("cond2")
            setTransactionFiltered(dataFilterDate)
        }else if(!transactionByDate && transactionByType){
            console.log("cond1")
            setTransactionFiltered(dataFilterType)
        }

        
    }, [dataSearchById, dataFilterDate, dataFilterType])

    const emptyFilter={
        filterType:"",
        filterTimeFrom:"",
        filterTimeTo:""
    }
    const emptySearch={
        searchID:"",
        searchDate:"",
    }

    let [search, setSearch] = useState(emptySearch)
    let [filter, setFilter] = useState(emptyFilter)
    let [errID, setErrID]=useState("") 
    let [errDate, setErrDate]=useState("")
    const listErrorSearch=[errID,errDate]
    const regex = /^[0-9\b]+$/;
    const [filterStatus,setFilterStatus] = useState(false)

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
        // console.log(filter.filterType, "filter")
    }
    const handleClose=()=>{
        setSearch(emptySearch)
        setTransactionById("")
    }
    const handleSubmitSearch=e=>{
        if (search.searchID){
            const idTrans=search.searchID
            getHistoryById({
            variables:{
                idUser:1,
                idTrans:idTrans
            }
        })
        console.log(idTrans, 'search')
        }
    }

    const handleSubmitFilter=()=>{
        if(filter.filterType && (!filter.filterTimeFrom || !filter.filterTimeTo) ){
            filterTypeHistory({
                variables:{
                    idUser:1,
                    idType: filter.filterType
                }
            })
            console.log("cond 1")
        } else if(filter.filterTimeFrom && filter.filterTimeTo && !filter.filterType){
            filterDateHistory({
                variables:{
                    idUser:1,
                    dateFrom: filter.filterTimeFrom,
                    dateTo: filter.filterTimeTo
                }
            })
        } else if(filter.filterTimeFrom && filter.filterTimeTo && filter.filterType){
            filterDateHistory({
                variables:{
                    idUser:1,
                    dateFrom: filter.filterTimeFrom,
                    dateTo: filter.filterTimeTo
                }
            })
            filterTypeHistory({
                variables:{
                    idUser:1,
                    idType: filter.filterType
                }
            })
        }
        setFilterStatus(true)
        
            
        
        console.log(transactionFiltered, "fetching filter", filter?.filterType, "id type" )
        console.log(dataFilterDate?.transaction )
    }

    const resetClick=()=>{
        setFilterStatus(false)
    }
    
    return (
        <div className='d-flex flex-column'>
            <Nav/>
            {loading?
                    <div className="pop-up-loading px-3 d-flex flex-column justify-content-center align-items-center">
                    <Loader type="Circles" color="#314F37" height={80} width={80}/>
                    <p className="fs-3 fw-light text-capitalize"> please wait...</p>
                </div> : null}
            
            {loadingFilterType||loadingFilterDate?
                <div className="pop-up-loading px-3 d-flex flex-column justify-content-center align-items-center">
                <Loader type="Circles" color="#314F37" height={80} width={80}/>
                <p className="fs-3 fw-light text-capitalize"> filter working...</p>
            </div> : null}
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
                            <input className='input-history' name='searchID' value={search.searchID} onChange={handleInput}></input>
                        </div>
                        <div className='d-flex flex-column mt-2 div-input'>
                            <label for>Date</label>
                            <input placeholder="yyyy-mm-dd" className='input-history' name='searchDate' value={search.searchDate} onChange={handleInput}></input>
                        </div>
                        {listErrorSearch.map((message)=>(<span className="errorMessage">{message} <br/></span>))}
                    </div>
                    <button className='back-color-green button-history align-self-end col-2' onClick={handleSubmitSearch}>search</button>
                </div>
                <div className='p-3 d-flex flex-column bg-light col-5 container-filter shadow p-3 mb-5 bg-body'>
                    <p className='fs-5'>Filter By</p>
                    <div className='ps-3'>
                        <div className='d-flex flex-column mt-2 div-input'>
                            <label for>Type :</label>
                            <select name='filterType' className='input-history-option' onChange={handleInput}>
                                <option value={filter.filterType} selected disabled hidden className='disabled-option'>Choose Type</option>
                                <option value="1">waste deposit</option>
                                <option value="2">cash out</option>
                            </select>
                            {/* <input className='input-history' name='filterType' value={filter.type} onChange={handleInput}></input> */}
                        </div>
                        <div className='d-flex flex-column mt-2 div-input'>
                            <label for>Time Span</label>
                            <div className='d-flex justify-content-evenly'>
                                <div >
                                    <label className='fw-bolder'>From :</label>
                                    <input className='input-history col-8 ms-1' placeholder="yyyy-mm-dd" name='filterTimeFrom' value={filter.filterTimeFrom} onChange={handleInput}></input>   
                                </div>
                                <div>
                                    <label className='fw-bolder'>To :</label>
                                    <input className='input-history col-8 ms-1' placeholder="yyyy-mm-dd" name='filterTimeTo' value={filter.filterTimeTo} onChange={handleInput}></input>   
                                </div>
                            </div>
                            
                        </div>
                    </div>
                    <button className='back-color-green button-history align-self-end col-2' onClick={handleSubmitFilter}>filter</button>
                </div>
            </div>

            <div className={search.searchID && transactionById?'pop-up-search d-flex flex-column align-self-center':'pop-up-none'}>
                <div className='d-flex flex-column align-items-end justify-content-between col-9 ms-auto me-auto pt-2'>
                    <div>
                        <p className='fw-bold fs-5'>{transactionById?.date}</p>
                        <tr>
                            <td>ID</td>
                            <td className='ps-1'>:</td>
                            <td>{transactionById?.id}</td>
                        </tr>
                        <tr>
                            <td>Type</td>
                            <td className='ps-1 pe-1'>:</td>
                            <td>{transactionById?.transaction_type?.name}</td>
                        </tr>
                        <tr>
                            <td>Description</td>
                            <td className='ps-1 pe-1'>:</td>
                            <td>{transactionById?.desc}</td>
                        </tr>
                        <p className='fw-bold fs-5 align-self-end'> Rp {transactionById?.nominal}</p>
                    </div>
                    <button className='justify-self-center button-close' onClick={handleClose}>close</button>
                
                </div>
                {/* <HistoryDetailOne Date={transactionById?.date} TransactionID={transactionById?.id} Type={transactionById?.transaction_type?.name} Desc={transactionById?.desc} Nominal={transactionById?.nominal}/> */}
            </div>
            <div className={!filterStatus?'button-none':'col-10 d-flex flex-column align-self-center'}>
                <button className='button-history back-color-green px-3 me-5 align-self-end reset-filter' onClick={resetClick}>reset filter</button>
            </div>
            <HistoryDetail data={filterStatus?(transactionFiltered?.transaction):(dataHistory?.transaction)} />
            <Footer/>
        </div>
    )
}
