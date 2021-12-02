import React from 'react'
import NavAdmin from '../../component/Navbar/NavAdmin'
import "./NotFound.css"
import { Link, useNavigate } from "react-router-dom"
import imageRobo from "./chatbot.png"

export default function NotFoundAdmin() {
    let navigate = useNavigate()

    return (
        <div>
            <NavAdmin/>
            <div className="container-ex d-flex justify-content-center align-items-center">
            <div className="d-flex flex-column align-items-center mx-auto justify-content-center  container-notFound back-color-green">
                {/* <p className="bad-request">404</p> */}
                <img className="img-fluid col-3" src={imageRobo}/>
                <p className="fs-1 fw-bold">Oops!</p>
                <p className="fs-3">We Can't Find The Page You're Looking For</p>
                {/* <button onClick={backToHome} className="button-back mt-2 py-1 px-3">Go to Home</button> */}
            </div>

            </div>

        </div>
    )
}
