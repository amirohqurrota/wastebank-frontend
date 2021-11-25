import React from 'react'
import Nav from '../../component/Navbar/Nav'
import './Home.css'
import Why from '../../component/Why/Why'
import IncomeHistory from '../../component/Income-History/IncomeHistory'
import Maps from '../../component/Maps/Maps'
import Footer from '../../component/footer/Footer'

export default function Home() {
    return (
        <>
            <h1 className="text-uppercase">test</h1>
                <div className="row container-banner">
                    <div className="col-6">
                        <div className='col-9'>
                            <p className="text-uppercase fs-1 fw-bold">welcome back</p>
                            <p className="text-capitalize fs-3 fw-bolder mt-n1">nama user!</p>
                            <p className='mt-2'>
                                Thank You for for your continued support and  saving endangered species and protecting our planet 
                                by your simple act in management waste. you has freed the earth from waste as much as 80 kg !
                            </p>
                        </div>
                        <div className='d-flex flex-column bg-light col-8 mt-4 recap-saldo'>
                            <a className='text-end see-cash-inout'>see cash in and out</a>
                            <div className='d-flex flex-row align-items-center'>
                                <div>
                                    <p className='fs-1 fw-bold'>$</p>  
                                </div>
                                <div className='ps-2'>
                                    <p>Active Balance</p>
                                    <p className='fs-3'>Rp 123.0000</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-6 image-container">
                        <div className="image-banner">
                            <p>image</p>
                        </div>
                    </div>
                </div>
            <Why />
            <IncomeHistory />
            <Maps/>
            <Footer/>
        </>
    )
}
