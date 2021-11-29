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

export default function Input() {
    const [searchUser,{loading, error,data: dataUser}]=useLazyQuery(GET_DATA_USER);

    const getData=()=>{
        searchUser({
            variables:{
                idUser
            }
        })
    }

    const[idUser,setIdUser]=useState()
    const [listWaste, setListWaste]=useState([])
    const [total, setTotal]=useState(0)
    
    const regex = /^[0-9\b]+$/;

    let [errID, setErrID]=useState("")
    const handleInput=e=>{
        const name= e.target.name;
        const value=e.target.value;

        if(regex.test(value)){
            setErrID("")
        }else{
            setErrID("ID must be number only")
        }
        setIdUser(value)
        // setInput({
        //     ...search,
        //     [name]: value
        // })
        // console.log(filter.filterType, "filter")
    }

    const changeTotal=(totalUpdate)=>{
        const update=total+totalUpdate
        console.log("total",total)
        // setTotal(totalUpdate)
        setTotal(update)
        // console.log(total)
    }

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
                        </div>
                    </div>
                    
                    <UserData data={dataUser?.user[0]}/>
                    <InputWaste setList={setListWaste} setTotal={changeTotal} />
                    <div className=' d-flex flex-row align-self-end align-items-center submit-input-admin'>
                        <div className='d-flex '>
                            <p>Total :</p>
                            <p className='ms-2'>Rp {total?total:"loading.."}</p>
                        </div>
                        <button className='ms-4 button-input-proceed back-color-green px-3 py-1'>Proceed</button>
                        
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    )
}
