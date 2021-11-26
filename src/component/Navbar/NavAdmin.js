import React from 'react'
import './Nav.css'

export default function NavAdmin() {
    return (
        <nav class="navbar navbar-expand-lg navbar-light back-color-green">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">WASTEBANK</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav ms-auto mb-2 mb-lg-0 me-5 navbar-link">
                    <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="#">Home</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link" href="#">Input Deposit</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link" href="#">Recap Data</a>
                    </li>
                </ul>
                </div>
            </div>
        </nav>

        
    )
}
