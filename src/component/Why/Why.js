import React from 'react'
import WhyOne from './Why-one'
import './Why.css'
import Nav from '../Navbar/Nav'
// import '../../materialIcons/repairing-service.png'
import './image/string-bag-with-food-illustration-eco-net-shopping-bag-with-products-concept-for-zero-waste-plastic-free-vector-removebg-preview.png'

const listWhy=[
    {
        image: './image/string-bag-with-food-illustration-eco-net-shopping-bag-with-products-concept-for-zero-waste-plastic-free-vector-removebg-preview.png',
        title:"It's Serious Problems",
        desc:"bad waste management can cause serious problem"
    },
    {
        image: './image/string-bag-with-food-illustration-eco-net-shopping-bag-with-products-concept-for-zero-waste-plastic-free-vector-removebg-preview.png',
        title:"Simple Act Matters",
        desc:"our simple act can make a big impact fot earth"
    },
    {
        image: './image/string-bag-with-food-illustration-eco-net-shopping-bag-with-products-concept-for-zero-waste-plastic-free-vector-removebg-preview.png',
        title:"For Next Generation",
        desc:"it for our grand children and the next generation"
    },
    {
        image: './image/string-bag-with-food-illustration-eco-net-shopping-bag-with-products-concept-for-zero-waste-plastic-free-vector-removebg-preview.png',
        title:"Be Kind for Earth",
        desc:"this can be one of the way we return the favor to the earth"
    },
    {
        image: './image/string-bag-with-food-illustration-eco-net-shopping-bag-with-products-concept-for-zero-waste-plastic-free-vector-removebg-preview.png',
        title:"Be Kind for Earth",
        desc:"this can be one of the way we return the favor to the earth"
    },
    {
        image: './image/string-bag-with-food-illustration-eco-net-shopping-bag-with-products-concept-for-zero-waste-plastic-free-vector-removebg-preview.png',
        title:"Be Kind for Earth",
        desc:"this can be one of the way we return the favor to the earth"
    }
]

export default function Why() {
    return (
        <div className='d-flex flex-column align-items-center why mx-auto my-5'>
            <p className='text-capitalize fs-2 fw-bold'>Why We Must Keep Doing This</p>
            <div className='d-flex flex-wrap col-10 container-why bg-light'>
                {listWhy.map((item)=><WhyOne image={item.image} title={item.title} desc={item.desc}/>)}
            </div>
        </div>
    )
}
