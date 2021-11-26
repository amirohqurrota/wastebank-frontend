import React from 'react'
import Footer from '../../component/footer/Footer'
import NavAdmin from '../../component/Navbar/NavAdmin'
import './Input.css'

export default function Input() {
    return (
        <>
            {/* <h1>ddd</h1> */}
            <NavAdmin/>
            <div className='d-flex flex-column align-items-center input-container'>
                <h2>Input New Deposit</h2>
                <div className='d-flex flex-column col-9 input-area'>
                    <div className='d-flex flex-row col-12 justify-content-between'>
                        <p>ID User</p>
                        <input className='col-8 input-admin' type='text' placeholder="search user's data by id.." />
                    </div>
                    <div className='col-8 bg-light align-self-end input-admin mt-3 p-4'>
                        <tr>
                            <td className='pe-4'>ID User </td>
                            <td className='pe-2'>: </td>
                            <td>123456789</td>
                        </tr>
                        <tr>
                            <td className='pe-4'>Username </td>
                            <td className='pe-2'>: </td>
                            <td>amirohqurrota</td>
                        </tr>
                        <tr>
                            <td className='pe-4'>Name </td>
                            <td className='pe-2'>: </td>
                            <td>Amiroh Qurrota A'yun</td>
                        </tr>
                        <tr>
                            <td className='pe-4'>Address </td>
                            <td className='pe-2'>: </td>
                            <td>Jl teku taka teki no 12 kotatua-Jawa Timur</td>
                        </tr>
                        <tr>
                            <td className='pe-4'>No Telp </td>
                            <td className='pe-2'>: </td>
                            <td>081234567890</td>
                        </tr>
                    </div>
                    <div className='d-flex flex-row col-12 mt-5 '>
                        <div className='d-flex flex-row align-items-center'>
                            <p className='me-3'>Types of Waste :</p>
                            <select className='input-admin'>
                                <option selected>choose type of waste...</option>
                                <option value="bottle">Bottle</option>
                                <option value="plastic">Plastic</option>
                                <option  value="coconut">Coconut</option>
                                <option value="mango">Mango</option>
                            </select>
                        </div>
                        <div className='d-flex flex-row ms-5 align-items-center'>
                            <p className='me-3'>Weight :</p>
                            <select className='input-admin'>
                                <option selected>choose type of waste...</option>
                                <option value="bottle">Bottle</option>
                                <option value="plastic">Plastic</option>
                                <option  value="coconut">Coconut</option>
                                <option value="mango">Mango</option>
                            </select>
                        </div>
                    </div>
                    <button className='align-self-center button-input-admin back-color-green px-3 py-1'>add more waste +</button>
                    <div className=' d-flex flex-row align-self-end align-items-center submit-input-admin'>
                        <div className='d-flex '>
                            <p>Total :</p>
                            <p className='ms-2'>Rp 123.000</p>
                        </div>
                        <button className='ms-4 button-input-proceed back-color-green px-3 py-1'>Proceed</button>
                        
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    )
}
