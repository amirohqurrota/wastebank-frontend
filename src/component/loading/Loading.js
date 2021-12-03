import React from 'react'
import Loader from "react-loader-spinner";

export default function Loading() {
    return (
        <div className="pop-up-loading px-3 d-flex flex-column justify-content-center align-items-center">
                <Loader type="Circles" color="#314F37" height={80} width={80}/>
                <p className="fs-3 fw-light text-capitalize"> please wait...</p>
        </div>
    )
}
