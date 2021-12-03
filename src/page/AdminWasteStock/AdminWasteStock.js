import {React, useState, useEffect} from 'react'
import NavAdmin from '../../component/Navbar/NavAdmin'
import {gql, useMutation, useQuery,useLazyQuery, useSubscription} from "@apollo/client";
import StockWaste from './StockWaste';
import Loading from '../../component/loading/Loading';
import PopUp from '../../component/PopUp/PopUp';
import Footer from '../../component/footer/Footer';


const GET_DATA_WASTE=gql`
query MyQuery {
    waste {
      id
      name
      purchase_price
      total_stock
    }
  }
`

const INSERT_WASTE=gql`
mutation MyMutation($purchase_price: Int!, $total_stock: Int!, $name: String = "") {
    insert_waste(objects: {name: $name, purchase_price: $purchase_price, total_stock: $total_stock}) {
      returning {
        name
        purchase_price
        total_stock
      }
    }
  }`

const DELETE_WASTE=gql`
mutation MyMutation($id: Int!) {
    delete_waste_by_pk(id: $id) {
    name
    }
}
`

export default function AdminWasteStock() {
    const [getWaste,{loading, error,data}]=useLazyQuery(GET_DATA_WASTE)
    const [insertWaste,{loading:loadInsert, error:errInsert,data:dataInsert}]=useMutation(INSERT_WASTE)
    const [deleteWaste,{loading:loadDelete, error:errDelete,data:dataDelete}]=useMutation(DELETE_WASTE)
    const [dataReturn,setDataReturn]=useState("")
    const [displayPopUp,setDisplayPop]=useState(false)

    useEffect(()=>{
        getWaste()
        setDataReturn(dataInsert)
        if(!loadInsert&&dataReturn){
            setDisplayPop(true)
        }
    },[data, dataInsert, dataReturn, getWaste, loadInsert, dataDelete,loadDelete])
    const emptyInput={
        purchase_price:0,
        total_stock:0,
        name:""
    }
    const [dataInput,setDataInput]=useState(emptyInput)
    const regex = /^[0-9\b]+$/;
    const[err, setErr]=useState("")
    const [statusInput, setStatusInput]=useState(false)
    const submitAdd=()=>{
        insertWaste({
            variables:{
                purchase_price:dataInput.purchase_price,
                total_stock:dataInput.total_stock,
                name:dataInput.name
            }
        })
        setStatusInput(false)
    
    }

    const handleInput=(e)=>{
        const value=e.target.value;
        const name=e.target.name;
        if (name==="purchase_price" || name==="total_stock"){
            if(regex.test(value)){
                setErr("")
            }else{
                setErr("stock or price purchase must be must be number only")
            }
        }
        
        setDataInput(
            {...dataInput,
            [name] : value}
        )
    }

    const closeDisplay=()=>{
        setStatusInput(!statusInput)
    }

    const closeDisplayPopUp=()=>{
        setDisplayPop(false)
    }
    return (
        <>
            <NavAdmin/>
            {loading||loadInsert||loadDelete?<Loading />:null}
            {!loadInsert&&dataReturn&&displayPopUp?<PopUp message1="succeed to add new waste" functionDisplay={closeDisplayPopUp}/>:null}
            <div className="d-flex flex-column align-items-center">
                <div className="d-flex flex-wrap justify-content-center col-10 mx-auto">
                    {/* <p>{JSON.stringify(data?.waste)}</p> */}
                    { data?.waste?.map((item)=><StockWaste data={item} delete={deleteWaste} />)}
                </div>
                <button className="col-7 button-edit-stock-add" onClick={closeDisplay}>add new waste</button>
                <div className={statusInput?"d-flex flex-column pop-up-input-waste align-items-center":"display-none"}>
                    <button type="button" class="close justify-self-end ms-auto me-4 close-button" onClick={closeDisplay} aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                    <div className="d-flex flex-column col-10">
                        <div className="d-flex flex-column my-1">
                            <label for="name">Input Name</label>
                            <input className="input-waste" onChange={handleInput} name="name" value={dataInput.name} placeholder="input waste name.."/>
                        </div>
                        <div className="d-flex flex-column my-1">
                        <label for="total_stock">Input Stock</label>
                            <input className="input-waste" onChange={handleInput} name="total_stock" value={dataInput.total_stock} placeholder="input stock.."/>
                        </div>
                        <div className="d-flex flex-column my-1">
                            <label for="purchase_value">Input Purchase</label>
                            <input  className="input-waste"onChange={handleInput} name="purchase_price" value={dataInput.purchase_price} placeholder="input purchase price" />
                        </div>
                        <p className="err-stock">{err}</p>
                        <button className="button-edit-stock py-1 mt-5"onClick={submitAdd}>submit new waste</button>
                    </div>
                    {/* <label>name</label> */}
                    
                </div>
            </div>
            <Footer/>

        </>
    )
}
