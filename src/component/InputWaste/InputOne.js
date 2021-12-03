import {React, useState, useEffect} from 'react'
import {gql, useQuery} from "@apollo/client";

const DATA_WASTE=gql`
query nameWaste {
    waste {
      id
      name
      purchase_price
    }
  }`


export default function InputOne(props) {
    const {setListWaste,concatWaste,setConcatWaste,setTotal}=props
    const {loading, error,data:dataWaste}=useQuery(DATA_WASTE)
    if (loading){
        console.log("loading queries")
    }
    if(error){
        console.log("error queries")
    }

    const emptyWaste={
        id:-1,
        idWaste:-1,
        weightWaste:"",
        typeWaste:"",
        totalMoney:0   
    }

    const regex = /^[0-9\b]+$/;
    const [errWeight, setErrWeight]=useState("")
    const [inputWaste, setInputWaste]=useState(emptyWaste)
    const [price,setPrice]=useState()
    const totalTemp=parseInt(price)*parseInt(inputWaste?.weightWaste)
    const handleInput=e=>{
        const target = e.target;
        const name= e.target.name;
        const value=target.type === "select" ? target.selected : target.value;;
        if(name==="weightWaste"){
            if(regex.test(value) || !value){
                setErrWeight("")
            }else{
                setErrWeight("weight must be number only (in kilograms)")
            }
        }
        setInputWaste({
            ...inputWaste,
            [name]: value
        })
    }

    
    
    useEffect(()=>{
        if (price&&inputWaste){
            setTotal(price*inputWaste?.weightWaste , inputWaste?.weightWaste )
        }
        // if(dataWaste){
        //     console.log("useeffet ", dataWaste?.waste)
        //     for (const element of dataWaste?.waste) {
        //         setWasteObject({...wasteObject,
        //             [element.name]:element.purchase_price
        //         }
        //         )
        //     }
        // }
    },[totalTemp,dataWaste])

    const handleAddWaste=()=>{
        const name=inputWaste?.typeWaste
        dataWaste?.waste?.map((x)=>x.name===name?setPrice(x.purchase_price):null)
        // const listWaste=dataWaste?.waste?.map((x)=>({
        //     value:x.purchase_price, text:x.name
        // }))
        // console.log(wasteObject)
        setListWaste(listWaste=>[...listWaste,inputWaste])
        const str=  " " + inputWaste.typeWaste + " " + inputWaste.weightWaste+"kg ;";
        setConcatWaste(`${concatWaste}${str}`)
    }

    return (
        <div className='d-flex flex-row col-12 mt-5 '>
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
