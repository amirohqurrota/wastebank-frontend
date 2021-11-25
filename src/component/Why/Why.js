import React from 'react'
import WhyOne from './Why-one'
import './Why.css'
import Nav from '../Navbar/Nav'
import '../../materialIcons/repairing-service.png'

const listWhy=[
    {
        image: '../../materialIcons/repairing-service.png',
        title:"Can Be Serious Problems",
        desc:"bad waste management in a country can cause serious problem"
    },
    {
        image: '../../materialIcons/repairing-service.png',
        title:"Simple Act Matters",
        desc:"our simple act can make a big impact fot earth if we do this together"
    },
    {
        image: '../../materialIcons/repairing-service.png',
        title:"For Next Generation",
        desc:"whatever we do now, it for our grand grand children and the next gen"
    },
    {
        image: '../../materialIcons/repairing-service.png',
        title:"Be Kind for Earth",
        desc:"this can be one of the way we return the favor to the earth"
    },
    {
        image: '../../materialIcons/repairing-service.png',
        title:"Be Kind for Earth",
        desc:"this can be one of the way we return the favor to the earth"
    },
    {
        image: '../../materialIcons/repairing-service.png',
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
