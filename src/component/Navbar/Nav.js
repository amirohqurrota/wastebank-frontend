import React from 'react'
import './Nav.css'
import { Link } from "react-router-dom";
import logo from "./logo.png"

export default function Nav() {
    return (
        <nav class="navbar navbar-expand-lg navbar-light back-color-green">
            <div class="container-fluid">
                <img src={logo} className="img-fluid image-logo ms-4"/>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav ms-auto mb-2 mb-lg-0 navbar-user navbar-link">
                    <li class="nav-item mx-3">
                    <Link to="/" class="nav-link active" aria-current="page" href="#">Home</Link>
                    </li>
                    <li class="nav-item mx-3">
                    <Link to="/history"class="nav-link" href="#">History</Link>
                    </li>
                    <li class="nav-item mx-3">
                    <Link to="/about" class="nav-link " href='#'>About Us</Link>
                    </li>
                    {/* <li class="nav-item">
                    <Link to="/" class="nav-link " href='#'>Hi User!</Link>
                    </li> */}
                </ul>
                </div>
            </div>
        </nav>

        
    )
}
