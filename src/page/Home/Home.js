import { Component,useState, useEffect }  from 'react'
import Nav from '../../component/Navbar/Nav'
import './Home.css'
import Why from '../../component/Why/Why'
import IncomeHistory from '../../component/Income-History/IncomeHistory'
import Maps from '../../component/Maps/Maps'
import Footer from '../../component/footer/Footer'
import {gql, useMutation, useQuery,useLazyQuery, useSubscription} from "@apollo/client";
import Loader from "react-loader-spinner";

// const GET_DATA_USER=gql`
// query GetUserByID($_id: Int!) {
//     user(where: {id: {_eq: $_id}}) {
//       id
//       first_name
//       last_name
//       total_saldo
//     }
//   }
// `;

const GET_DATA_USER=gql`
query GetUserByID {
    user(where: {id: {_eq: 1}}) {
      id
      first_name
      last_name
      total_saldo
    }
  }
`;
  
const TRANSACTION_HIST_USER=gql`
query transactionHistById($idUser: Int!) {
    transaction(where: {id_user: {_eq: $idUser}, id_type: {_eq: 1}}) {
      nominal
      id
      date
    }
  }`;

  
const HEIGHT_TRANSACTION=gql`
  query heightTransaction($idTransaction: Int = 10) {
    waste_deposit_aggregate(where: {id_transaction: {_eq: $idTransaction}}) {
      aggregate {
        sum {
          total_height
        }
      }
    }
  }`;
  

export default function Home() {
    // const [getData, {loading, error,data}]=useLazyQuery(GET_DATA_USER);
    const {loading, error,data}=useQuery(GET_DATA_USER);
    // const [getHistoryTrans, {loading2, error2,dataTransaction}]=useLazyQuery(TRANSACTION_HIST_USER);
    const [getDataTransaction, {loading2, error2,dataTransaction}]=useLazyQuery(TRANSACTION_HIST_USER);
    const [getHeightTrans, {loading3, error3,dataTransactionHeight}]=useLazyQuery(HEIGHT_TRANSACTION);
    // const [userDataBasic, setUserDataBasic]=useState()
    const [histTransaction, setHistTransaction]=useState("default")
    

    useEffect(() => {
        // getDataUser()
        // setUserDataBasic(data)
        setHistTransaction(dataTransaction?.user)
        // console.log(dataTransaction)
    }, [loading2, dataTransaction])

    console.log(loading, 'loading...')
    console.log(`Error! ${error2}`)
    const [arrayIdTransaction,setArrayIdTransaction]=useState([])
    let newArray
    const [arrayHeight,setArrayHeight]=useState([])
    let newArrayHeight
    function tes(){
        getDataTransaction({
            variables:{
                idUser:1
            }
        })
        // const cek=[1,2,3,4,5]
        {histTransaction.map((item)=>
            newArray=arrayIdTransaction.push(item.id_transaction),
            setArrayIdTransaction(newArray)
            )}
        setArrayHeight(arrayIdTransaction.map((idTransaction)=>
            getHeightTrans({
                variables:{
                    idTransaction
                }
            })
        ))
    }
    
    // console.log('data fetching transaction : ', histTransaction) 
    console.log('data fetching transactionHist : ', histTransaction)
    // console.log('data fetching transaction : ', dataTransaction)

    return (
        <>
            <Nav/>
                <div className="row container-banner">
                    {/* <p>{JSON.stringify(data.user[0].first_name)}</p> */}
                    <button onClick={tes}>click me for testing fetching</button>
                    <p>{JSON.stringify(data)}</p>
                    <p>{histTransaction}</p>
                    {/* <h1>{JSON.stringify(TRANSACTION_HIST_USER)}</h1> */}
                    <div className="col-6">
                        <div className='col-9'>
                            <p className="text-uppercase fs-1 fw-bold">welcome back</p>
                            {/* <p className="text-capitalize fs-3 fw-bolder mt-n1">{data.user[0].first_name}!</p> */}
                            <p className="text-capitalize fs-3 fw-bolder mt-n1">nama !</p>
                            <p className='mt-2'>
                                Thank You for for your continued support and  saving endangered species and protecting our planet 
                                by your simple act in management waste. you has freed the earth from waste as much as 80 kg !
                            </p>
                        </div>
                        <div className='d-flex flex-column bg-light col-8 mt-4 recap-saldo'>
                            <a className='text-end see-cash-inout'>see cash in and out</a>
                            <div className='d-flex flex-row align-items-center'>
                                <div>
                                    <p className='fs-1 fw-bold'>Rp</p>  
                                </div>
                                <div className='ps-2'>
                                    <p>Active Balance</p>
                                    {/* <p className='fs-3'> {data.user[0].total_saldo}</p> */}
                                    <p className='fs-3'> xxxx.xxxx.xxx</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-6 image-container">
                        <div className="image-banner">
                            <p>image</p>
                        </div>
                    </div>
                </div>
            <Why />
            <IncomeHistory/>
            <Maps/>
            <Footer/>
        </>
    )
}
