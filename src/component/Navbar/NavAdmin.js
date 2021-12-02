import React from 'react'
import './Nav.css'
import { Link, Navigate } from "react-router-dom"
import logo from "./logo.png"

export default function NavAdmin() {
    return (
        <nav class="navbar navbar-expand-lg navbar-light back-color-green">
            <div class="container-fluid">
                <img src={logo} className="img-fluid image-logo ms-4"/>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav ms-auto mb-2 mb-lg-0 me-5 navbar-link">
                    <li class="nav-item">
                    <Link to="/admin/input" class="nav-link" href="#">Input Deposit</Link>
                    </li>
                    <li class="nav-item">
                    <Link to="/admin/waste" class="nav-link active" aria-current="page" href="#">Waste Data</Link>
                    </li>
                    <li class="nav-item">
                    <Link to="/admin/transaction" class="nav-link" href="#">Data Transaction</Link>
                    </li>
                </ul>
                </div>
            </div>
        </nav>

        
    )
}
