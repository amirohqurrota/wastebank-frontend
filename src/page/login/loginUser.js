import {React,useState, useEffect} from 'react'
import "./login.css"
import {gql, useMutation, useQuery,useLazyQuery, useSubscription} from "@apollo/client";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import {login} from '../../store/user'
import Loader from "react-loader-spinner";
import userData from '../../component/userData/userData';

const LOGIN_DATA=gql`
query MyQuery13($username: String = "", $password: String = "") {
    user(where: {username: {_eq: $username}, _and: {password: {_eq: $password}}}) {
      id
      last_name
      first_name
    }
  }`

export default function LoginUser() {
    const [getDataLogin, {loading, error, data}]=useLazyQuery(LOGIN_DATA)
    const navigate = useNavigate();
	const dispatch = useDispatch();
    const emptyLogin={
        username:"",
        password:"",
    }
    const [loginInput, setLoginInput] = useState(emptyLogin)
    const [errLogin, setErrLogin] = useState()
    const handleInput=e=>{
        const name= e.target.name;
        const value=e.target.value;

        if (name==="username"){
            if(value.indexOf(' ') >= 0){
                setErrLogin("username doesn't allow blank character/space")
            }else{
                setErrLogin("")
            }
        }
        setLoginInput({
            ...loginInput,
            [name]: value
        })
        
    }
    
    useEffect(()=>{
        if(data&&!loading){
            if(data?.user.length===0){
                setErrLogin("incorrect username or password")
            }else{
                setErrLogin("")
                const UsersData={
                    userId: data.user[0].id,
                    lastName: data.user[0].last_name,
                    firstName:data.user[0].first_name
                }
                dispatch(login(UsersData))
                navigate('/')
            }
        }
    },[data, dispatch, loading, navigate]);

    const submitLogin=()=>{
        getDataLogin({
            variables:{
                username:loginInput.username,
                password:loginInput.password
            }
        })
        // console.log(search)

    }
    if (loading){

    }
    
    
    return (
        <div className="d-flex">
            <div className="col-5 image-left"></div>
            <div className="container-input col-7 d-flex flex-column">
                <p>{JSON.stringify(data?.user)}</p>
                <div className="col-9 input-area-login align-self-center container-input d-flex flex-column">
                    <p className="fs-2 fw-bolder align-self-start">WELCOME BACK,</p>
                    <p className="fs-5 align-self-start">Please Sign-In to continue</p>
                    <div className="col-9 align-self-center mt-4">
                        <label>Username</label>
                        <input className="col-12 input py-1 " name="username" onChange={handleInput}></input>
                        <label className="mt-3">Password</label>
                        <input className="col-12 input py-1" name="password" type="password" onChange={handleInput}></input>
                        {errLogin?<p className='error-validation'>{errLogin}</p>:null}
                        <button className="col-12 button py-2 mt-5 back-color-green submit-login" name="" onClick={submitLogin}>Sign In</button>
                        
                    </div>
                    
                </div>
                
                {/* <div className="pop-up-login px-3 d-flex flex-column justify-content-center align-items-center">
                    {data?.user==[]?<p className="fs-2 fw-bold">wrong username or password</p>:null}
                    <p className="fs-2 fw-bold">WELCOME BACK </p>
                    <p className="fs-3 fw-light text-capitalize"> {data?.user[0]?.first_name} {data?.user[0]?.last_name} !</p>
                </div> */}
                {loading?
                    <div className="pop-up-loading px-3 d-flex flex-column justify-content-center align-items-center">
                    <Loader type="Circles" color="#314F37" height={80} width={80}/>
                    <p className="fs-3 fw-light text-capitalize"> please wait...</p>
                </div> : null}



            </div>
        </div>
    )
}
