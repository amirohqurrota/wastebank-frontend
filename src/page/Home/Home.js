import { Component,useState, useEffect }  from 'react'
import { useDispatch, useSelector } from "react-redux";
import Nav from '../../component/Navbar/Nav'
import './Home.css'
import Why from '../../component/Why/Why'
import IncomeHistory from '../../component/Income-History/IncomeHistory'
import Maps from '../../component/Maps/Maps'
import Footer from '../../component/footer/Footer'
import {gql, useMutation, useQuery,useLazyQuery, useSubscription} from "@apollo/client";
import Loader from "react-loader-spinner";
import { Link } from "react-router-dom";
import Loading from '../../component/loading/Loading';

const GET_DATA_USER=gql`
query GetUserByID($idUser: Int!) {
    user(where: {id: {_eq: $idUser}}) {
      id
      first_name
      last_name
      total_saldo
    }
  }
`;
  
const TRANSACTION_HIST_USER=gql`
query transactionHistById ($idUser: Int!) {
    transaction(where: {id_user: {_eq: $idUser}, id_type: {_eq: 1}}) {
      nominal
      id
      date
      total_weight
      desc
    }
  }`;

  
const GET_WEIGHT=gql`
query MyQuery($idUser: Int!){
    transaction_aggregate(where: {id_user: {_eq: $idUser}}) {
      aggregate {
        sum {
          total_weight
        }
      }
    }
  }`
  

export default function Home() {
    const [getWeight,{loading : loadWeight, error:errWeight,data:dataWeight}]=useLazyQuery(GET_WEIGHT);
    const [getDataUser, {loading:loadDataUser, error:errDataUser,data:dataUser}]=useLazyQuery(GET_DATA_USER);
    const [getDataTransaction, {loading: loadDataTransaction, error:errDataTransaction,data:dataTransaction}]=useLazyQuery(TRANSACTION_HIST_USER);

    if (loadWeight||loadDataTransaction||loadDataUser) {
        console.log("loading..")
    }
    if (errWeight||errDataUser||errDataTransaction) {
        console.log("errWeight ", errWeight)
        console.log("errDataUser ", errDataUser)
        console.log("errDataTransaction ", errDataTransaction)
    }
    const idUser = useSelector((state) => state.dataUserLogin.userId)
    // console.log("redux id", idUser)
    
    useEffect(() => {
        getDataUser({
            variables:{
                idUser
            }
        })
        getWeight({
            variables:{
                idUser
            }
        })
        getDataTransaction({
            variables:{
                idUser
            }
        })
    },[dataUser, getDataUser, getWeight, idUser, dataWeight, dataTransaction, getDataTransaction])


    return (
        <>
            <Nav/>
                {loadWeight||loadDataTransaction||loadDataUser?<Loading/> : null}
                <div className="row container-banner">
                    <div className="col-6">
                        <div className='col-9'>
                            <p className="text-uppercase fs-1 fw-bold">welcome back</p>
                            <p className="text-capitalize fs-3 fw-bolder mt-n1">{dataUser?.user[0]?.first_name}!</p>
                            <p className='mt-2'>
                                Thank You for for your continued support and  saving endangered species and protecting our planet 
                                by your simple act in management waste. you has freed the earth from waste as much as {dataWeight?.transaction_aggregate?.aggregate?.sum?.total_weight} kg !
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
                                    <p className='fs-3'> {dataUser?.user[0]?.total_saldo}</p>
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
