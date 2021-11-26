import React from 'react'
import './Footer.css'
import logo from './Free_Sample_By_Wix.jpg'

export default function Footer() {
    return (
        <div className=' d-flex justify-content-evenly back-color-green footer-container '>
            <div className='col-2 footer-left'>
                <div>
                    <image src={logo} alt="Logo"/> 
                    <div className=''>kk</div>
                    <p className='fs-6 fst-italic'>"Make Big Impact With Small Act"</p>
                </div>
                <div className='pt-3'>
                    <p className='fs-6'>follow us at :</p>
                    <div className='d-flex justify-content-evenly'>
                        <a href='' className='w-1 bg-light container-logo' id='logo-yt'></a>
                        <a href=''><div className='w-1 bg-light container-logo' id='logo-ig'></div></a>
                        <a href=''><div className='w-1 bg-light container-logo' id='logo-tw'></div></a>
                        <a href=''><div className='w-1 bg-light container-logo' id='logo-fb'></div></a>
                    </div>
                </div>
            </div>
            <div className='footer-left-brand'>
                <p className='fw-bolder'>Brand</p>
                <div className='pt-2 d-flex flex-column'>
                    <a>Brand</a>
                    <a>Product</a>
                    <a>Product</a>
                    <a>Product</a>
                </div>
            </div>
            <div className='footer-left-company'>
                <p className='fw-bolder'>Company</p>
                <div className='pt-2 d-flex flex-column'>
                    <a>About Us</a>
                    <a>Careers</a>
                    <a>Support</a>
                    <a>Privacy Policy</a>
                    <a>Terms of Service</a>
                </div>
            </div>
            <div className='footer-left-download col-3'>
                <p className='fw-bolder text-center'>Download App</p>
                <div className='d-flex justify-content-between pt-2'>
                    <div className='bg-light col-5'>
                        dd
                    </div>
                    <div className='bg-light col-5'>
                        dd
                    </div>
                </div>
            </div>
        </div>
    )
}
