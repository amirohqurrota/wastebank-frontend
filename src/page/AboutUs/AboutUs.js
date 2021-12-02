import React from 'react'
import './AboutUs.css'
import Carousel from '../../component/Carousel_Banner/Carousel'
import Why from '../../component/Why/Why'
import image1 from './image/ivan-bandura-Ac97OqAWDvg-unsplash.jpg'
import { matchRoutes } from 'react-router'
import Maps from '../../component/Maps/Maps'
import Footer from '../../component/footer/Footer'
import Nav from '../../component/Navbar/Nav'

export default function AboutUs() {
    return (
        <>
            <Nav/>
            <Carousel/>
            <Why/>
            <div className='col-10 ms-auto me-auto mt-0 pt-0 d-flex'>
                <div className='col-6'>
                <img src={image1} className="d-block w-100 image-banner-about" alt="..."/>
                </div>
                <div className='col-6 d-flex flex-column justify-content-center'>
                    <p className='ps-4 fs-4'>natura is organic farming company. we existed since 2010. 
                        Organic farming is an agricultural system that uses fertilizers 
                        of organic origin such as compost manure, green manure, 
                        and bone meal and places emphasis on techniques such as crop rotation and companion planting.
                        </p>
                    <p className='ps-4 fs-4'>we believe small action in our bussines can impact in our big earth.</p>
                </div>
            </div>
            <Maps/>
            <Footer/>
        </>
    )
}
