import React from 'react'
import Loader from "react-loader-spinner";
import './PopUp.css'

export default function PopUp(props) {
    return (
        <div className="pop-up-loading px-3 d-flex flex-column justify-content-center align-items-center container-pop-up">
                <button type="button" class="close justify-self-end ms-auto me-4 mb-auto mt-4 close-button" onClick={props.functionDisplay} aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
                {/* <Loader type="Circles" color="#314F37" height={80} width={80}/> */}
                <p className="fs-3 fw-light text-capitalize">{props.message1}</p>
                <p className="fs-3 fw-light text-capitalize">{props.message2}</p>
                {/* <button>ok</button> */}
        </div>
    )
}
