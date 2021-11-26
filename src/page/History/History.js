import React from 'react'
import './History.css'
import HistoryDetail from '../../component/HistoryDetail/HistoryDetail'
import Footer from '../../component/footer/Footer'
import Nav from '../../component/Navbar/Nav'

export default function History() {
    return (
        <div>
            <Nav/>
            <div className='ms-0 back-color-green col-6 d-flex p-5 container-wallet flex-row justify-content-center align-items-center mb-5'>
                <div className='mt-4 mb-4'>
                    <p className='fs-4'>active balance</p>
                    <p className='fs-6'>ID User : 1234567894k4</p>
                </div>
                <p className='fw-bold fs-3 ms-5'>Rp 100.0000</p>
            </div>
            <div className='d-flex col-11 justify-content-evenly ms-auto me-auto'>
                <div className='d-flex flex-column bg-light col-5 container-filter p-3'>
                    <p className='fs-5'>Search By</p>
                    <div className='ps-3'>
                        <div className='d-flex flex-column mt-2 div-input'>
                            <label for>ID</label>
                            <input className='input-history'></input>
                        </div>
                        <div className='d-flex flex-column mt-2 div-input'>
                            <label for>Date</label>
                            <input className='input-history'></input>
                        </div>
                    </div>
                    <button className='back-color-green button-history align-self-end col-2'>search</button>
                </div>
                <div className='p-3 d-flex flex-column bg-light col-5 container-filter'>
                    <p className='fs-5'>Filter By</p>
                    <div className='ps-3'>
                        <div className='d-flex flex-column mt-2 div-input'>
                            <label for>Type :</label>
                            <input className='input-history'></input>
                        </div>
                        <div className='d-flex flex-column mt-2 div-input'>
                            <label for>Time Span</label>
                            <div className='d-flex justify-content-evenly'>
                                <div >
                                    <label className='fw-bolder'>From :</label>
                                    <input className='input-history col-8 ms-1' type='date'></input>   
                                </div>
                                <div>
                                    <label className='fw-bolder'>To :</label>
                                    <input className='input-history col-8 ms-1' type='date'></input>   
                                </div>
                            </div>
                            
                        </div>
                    </div>
                    <button className='back-color-green button-history align-self-end col-2'>filter</button>
                </div>
            </div>
            
            <HistoryDetail/>
            <Footer/>
        </div>
    )
}
