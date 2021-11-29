import {React, useState, useEffect} from 'react'
import {gql, useMutation, useQuery,useLazyQuery, useSubscription} from "@apollo/client";

const DATA_WASTE=gql`
query nameWaste {
    waste {
      id
      name
      purchase_price
    }
  }`
export default function InputOne(props) {
    const {loading, error,data:dataWaste}=useQuery(DATA_WASTE)

    const regex = /^[0-9\b]+$/;
    const [errWeight, setErrWeight]=useState("")
    const emptyWaste={
        weightWaste:"",
        typeWaste:"",
    }
    const [inputWaste, setInputWaste]=useState(emptyWaste)
    const handleInput=e=>{
        const target = e.target;
        const name= e.target.name;
        const value=target.type === "select" ? target.selected : target.value;;
        if(name==="weightWaste"){
            if(regex.test(value) || !value){
                setErrWeight("")
            }else{
                setErrWeight("weight must be number only")
            }
        }
        setInputWaste({
            ...inputWaste,
            [name]: value
        })
        console.log(value, "value")
        console.log(name, "name")
    }

    const [price,setPrice]=useState()
    const totalTemp=parseInt(price)*parseInt(inputWaste?.weightWaste)
    
    // const totalTemp=5000
    useEffect(()=>{
        if (price&&inputWaste){
            props.setTotal(price*inputWaste?.weightWaste)
        }
        
    },[totalTemp])

    const handleAddWaste=()=>{
        const name=inputWaste?.typeWaste
        dataWaste?.waste?.map((x)=>x.name===name?setPrice(x.purchase_price):x)
        // setTotalTemp(parseInt(price)*parseInt(inputWaste?.weightWaste))
        // props.setTotal(price*inputWaste?.weightWaste)
        // props.setTotal(10000)
    }

    return (
        <div className='d-flex flex-row col-12 mt-5 '>
            {/* <p>{JSON.stringify(dataWaste?.waste)}</p> */}
            {/* <p>{price}</p> */}
            <div className='d-flex flex-row align-items-center'>
                <p className='me-3'>Types of Waste :</p>
                <select className='input-admin' name="typeWaste" value={inputWaste.typeWaste} onChange={handleInput}>
                    <option selected>choose type of waste...</option>
                    {dataWaste?.waste?.map((x)=><option value={x.name} >{x.name}</option>)}
                </select>
            </div>
            <div className='d-flex flex-row ms-5 align-items-center'>
                <p className='me-3'>Weight :</p>
                <div>
                    <input className="input-admin" placeholder="input in kilograms" name="weightWaste" value={inputWaste.weightWaste} onChange={handleInput}></input>
                    {errWeight?<p className='error'>{errWeight}</p>:<p className='none'>*kilograms</p>}
                </div>
                </div>
            <button className='back-color-green px-3 button ms-3' onClick={handleAddWaste}>add</button>
        </div>
    )
}
