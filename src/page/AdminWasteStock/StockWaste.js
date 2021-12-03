import React from 'react'
import {gql, useMutation, useQuery,useLazyQuery, useSubscription} from "@apollo/client";
import { Component,useState, useEffect }  from 'react'
import Loading from '../../component/loading/Loading';
import "./stock.css"




export default function StockWaste(props) {

    const submitNew=()=>{
        props.delete({
            variables:{
                id:props.data.id
            }
        })
        console.log("delete")
    }
    return (
        <div className="col-3 bg-light mx-3 my-3 p-3 border container-stock-one">
            {/* <div className="container-image"></div> */}
            <tr>
                <td className="fw-bold">waste </td>
                <td className="pe-3 ps-2">: </td>
                <td>{props?.data?.name}</td>
            </tr>
            <tr>
                <td className="fw-bold">stock </td>
                <td className="pe-3 ps-2">: </td>
                <td>{props?.data?.total_stock}</td>
            </tr>
            <tr>
                <td className="fw-bold">Purchase Price </td>
                <td className="pe-3 ps-2">: </td>
                <td>{props?.data?.purchase_price}</td>
            </tr>
            <button className="button-edit-stock delete-button" onClick={submitNew}>delete</button>

        </div>
    )
}
