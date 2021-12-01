import { Component,useState, useEffect }  from 'react'
import Nav from '../../component/Navbar/Nav'
import './Home.css'
import Why from '../../component/Why/Why'
import IncomeHistory from '../../component/Income-History/IncomeHistory'
import Maps from '../../component/Maps/Maps'
import Footer from '../../component/footer/Footer'
import {gql, useMutation, useQuery,useLazyQuery, useSubscription} from "@apollo/client";
import Loader from "react-loader-spinner";
import { Link } from "react-router-dom";

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
query transactionHistById {
    transaction(where: {id_user: {_eq: 1}, id_type: {_eq: 1}}) {
      nominal
      id
      date
      total_height
      desc
    }
  }`;

  
const GET_HEIGHT=gql`
query MyQuery{
    transaction_aggregate(where: {id_user: {_eq: 1}}) {
      aggregate {
        sum {
          total_height
        }
      }
    }
  }`
  

export default function Home() {
    const {loading : loadHeight, error:errHeight,data:dataHeight}=useQuery(GET_HEIGHT);
    const {loading, error,data}=useQuery(GET_DATA_USER);
    const {loading2, error2,data:dataTransaction}=useQuery(TRANSACTION_HIST_USER);
    


    console.log(loading, 'loading...')
    console.log(`Error! ${error2}`)


    return (
        <>
            <Nav/>
                {loading?
                    <div className="pop-up-loading px-3 d-flex flex-column justify-content-center align-items-center">
                    <Loader type="Circles" color="#314F37" height={80} width={80}/>
                    <p className="fs-3 fw-light text-capitalize"> please wait...</p>
                </div> : null}
                <div className="row container-banner">
                    {/* <p>{JSON.stringify(dataTransaction?.transaction)}</p> */}
                    <div className="col-6">
                        <div className='col-9'>
                            <p className="text-uppercase fs-1 fw-bold">welcome back</p>
                            <p className="text-capitalize fs-3 fw-bolder mt-n1">{data?.user[0]?.first_name}!</p>
                            {/* <p className="text-capitalize fs-3 fw-bolder mt-n1">nama !</p> */}
                            <p className='mt-2'>
                                Thank You for for your continued support and  saving endangered species and protecting our planet 
                                by your simple act in management waste. you has freed the earth from waste as much as {dataHeight?.transaction_aggregate?.aggregate?.sum?.total_height} kg !
                            </p>
                        </div>
                        <div className='d-flex flex-column bg-light col-8 mt-4 recap-saldo'>
                            <Link to="/history" className='text-end see-cash-inout'>see cash in and out</Link>
                            <div className='d-flex flex-row align-items-center'>
                                <div>
                                    <p className='fs-1 fw-bold'>Rp</p>  
                                </div>
                                <div className='ps-2'>
                                    <p>Active Balance</p>
                                    <p className='fs-3'> {data?.user[0]?.total_saldo}</p>
                                    {/* <p className='fs-3'> xxxx.xxxx.xxx</p> */}
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
            <IncomeHistory data={dataTransaction?.transaction}/>
            <Maps/>
            <Footer/>
        </>
    )
}
