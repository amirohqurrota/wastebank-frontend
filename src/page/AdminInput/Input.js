import {React, useEffect, useState} from 'react'
import Footer from '../../component/footer/Footer'
import NavAdmin from '../../component/Navbar/NavAdmin'
import './Input.css'
import {gql, useMutation, useQuery,useLazyQuery, useSubscription} from "@apollo/client";
import InputWaste from '../../component/InputWaste/InputWaste';
import UserData from '../../component/userData/userData';


const GET_DATA_USER=gql`
query GetUserByID($idUser: Int!) {
    user(where: {id: {_eq: $idUser}}) {
      id
      username
      first_name
      last_name
      total_saldo
      telephone
    }
  }
`;

const UPDATE_USER=gql`
mutation MyMutation($idUser: Int = 10, $totalSaldo: bigint = "") {
    update_user(where: {id: {_eq: $idUser}}, _inc: {total_saldo: $totalSaldo}) {
      returning {
        id
        username
        total_saldo
      }
    }
  }`

const UPDATE_TRANSACTION=gql`
mutation MyMutation2($idAdmin: Int!, $id_type: Int!, $idUser: Int!, $nominal: Int!, $totalWeight: Int!, $desc: String = "") {
    insert_transaction(objects: {id_admin: $idAdmin, id_user: $idUser, id_type: $id_type, nominal: $nominal, total_weight: $totalWeight, desc: $desc}) {
      returning {
        id
        id_user
        nominal
        date
        total_weight
        desc
      }
    }
  }
`

const UPDATE_WEIGHT_WASTE=gql`
mutation MyMutation3($wasteName: String = "", $weight: Int!) {
    update_waste(where: {name: {_eq: $wasteName}}, _inc: {total_stock: $weight}) {
      returning {
        total_stock
        id
        name
      }
    }
  }`


const INSERT_WASTE_DEPOSIT=gql`
mutation MyMutation4($total_money: money = "", $total_weight: Int!, $id_transaction: Int!, $id_waste: Int!) {
    insert_waste_deposit(objects: {id_transaction: $id_transaction, id_waste: 1, total_weight: $total_weight, total_money: $total_money}) {
      returning {
        id
        id_transaction
        id_waste
        total_height
        total_money
      }
    }
  }`


export default function Input() {
    const [searchUser,{loading, error,data: dataUser}]=useLazyQuery(GET_DATA_USER);
    const [updateUser,{loading:loadUpdateUser, error : errUpdateUser,data: returnUpdateUser}]=useMutation(UPDATE_USER);
    const [updateTransaction,{loading:loadUpdateTransaction, error: errUpdateTransaction,data: returnUpdateTransaction}]=useMutation(UPDATE_TRANSACTION);
    const [updateWaste,{loading:loadUpdateWaste, error: errUpdateWaste,data: returnUpdateWaste}]=useMutation(UPDATE_WEIGHT_WASTE);
    // const [insertWasteDeposit,{loading:loadInsertWasteDepo, error: errInsertWasteDepo,data: returnInsertWasteDepo}]=useMutation(INSERT_WASTE_DEPOSIT);
    
    if (error||errUpdateTransaction||errUpdateUser||errUpdateWaste){
        console.log("something error in query")
        console.log("query err update trans", errUpdateTransaction)
        console.log("query err update user", errUpdateUser)
        // console.log("query err update Insert waste depo", errInsertWasteDepo)
        console.log("query err update Update waste", errUpdateWaste)
    }
    if (loading||loadUpdateTransaction||loadUpdateUser||loadUpdateWaste){
        console.log("loading query update")
    }

    const[idUser,setIdUser]=useState()
    const[transactionId,setTransactionId]=useState()
    const [listWaste, setListWaste]=useState([])
    const [concatWaste, setConcatWaste]=useState("")
    const [total, setTotal]=useState(0)
    const [totalWeight, setTotalWeight]=useState(0)
    const regex = /^[0-9\b]+$/;
    const [errID, setErrID]=useState("")

    const handleInput=e=>{
        const value=e.target.value;

        if(regex.test(value)){
            setErrID("")
        }else{
            setErrID("ID must be number only")
        }
        setIdUser(value)
    }

    const changeTotal=(totalUpdateNominal,totalUpdateWeight)=>{
        const updateNominal=parseInt(total)+parseInt(totalUpdateNominal)
        const updateWeight=parseInt(totalWeight)+parseInt(totalUpdateWeight)
        setTotalWeight(updateWeight)
        setTotal(updateNominal)
    }

    const getData=()=>{
        searchUser({
            variables:{
                idUser
            }
        })
    }

    const handleSubmit=()=>{
        updateUser({
            variables:{
                idUser,
                totalSaldo:total
            }
        })
        updateTransaction({
            variables:{
                idAdmin:1,
                id_type:1,
                idUser,
                nominal:total,
                totalWeight,
                desc:concatWaste

            }
        })
        listWaste.map(
            (item)=>
                updateWaste({
                    variables:{
                        wasteName:item.typeWaste,
                        weight:item.weightWaste
                    }
                })
                // console.log("item = ",item.weightWaste)
            )
        // listWaste.map(
        //     (item)=> insertWasteDeposit({
        //         variables:{
        //             total_money: total,
        //             $total_weight: item.weightWaste,
        //             $id_transaction: transactionId,
        //         }
        //     })
        //     )
        console.log("total weight :", totalWeight)
    }

    
    useEffect(()=>{
        setTransactionId(returnUpdateTransaction?.transaction?.id)
        console.log("use effect ", totalWeight)

    },[returnUpdateTransaction,totalWeight])
    return (
        <>
            <NavAdmin/>
            {/* <p>{JSON.stringify(dataUser?.user[0])}</p> */}
            <div className='d-flex flex-column align-items-center input-container'>
                <h2>Input New Deposit</h2>
                <div className='d-flex flex-column col-9 input-area'>
                    <div className='d-flex justify-content-between'>
                        <p className='justify-self-center'>ID User :</p>
                        <div className='d-flex flex-row col-8 align-self-end'>
                            <div className='align-self-end input-group col-12'>
                                <input className='input-admin col-10' type='text' value={idUser} onChange={handleInput} placeholder="search user's data by id.." />
                                <button className='input-admin col-2' onClick={getData}>search..</button>
                            </div>
                            {errID?<p className="error">{errID}</p>:null}
                        </div>
                    </div>
                    
                    <UserData data={dataUser?.user[0]}/>
                    <InputWaste listWaste={listWaste} setListWaste={setListWaste} concatWaste={concatWaste} setConcatWaste={setConcatWaste} setTotal={changeTotal} />
                    <div className=' d-flex flex-row align-self-end align-items-center submit-input-admin'>
                        <div className='d-flex '>
                            <p>Total :</p>
                            <p className='ms-2'>Rp {total?total:"loading.."}</p>
                        </div>
                        <button className='ms-4 button-input-proceed back-color-green px-3 py-1' onClick={handleSubmit}>Proceed</button>
                        
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    )
}
