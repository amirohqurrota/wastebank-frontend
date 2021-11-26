import React from 'react'
import useState from 'react-hook-use-state'
import FilterById from '../../component/FilterRecap/FilterById'
import FilterByType from '../../component/FilterRecap/FilterByType'
import NavAdmin from '../../component/Navbar/NavAdmin'
import Footer from '../../component/footer/Footer'
import './Recap.css'
import RecapDataElement from '../../component/RecapData/RecapDataElement'

export default function RecapData() {
    const [filterById, setFilterById]=useState(true)
    const [valueFilter, setValueFilter]=useState('filter by id')
    const handleFilter=e=>{
        if (valueFilter==='filter by id'){
            setFilterById(false)
        }
        if (valueFilter==='filter by type'){
            setFilterById(true)
        }
        setValueFilter(e.target.value)
        console.log("change , " , valueFilter)
        
    }
    const data=[
        {
            userID:'23jknfkn9ng95',
            transactionID: '1239439494985u43u58',
            date:'24/10/20',
            type:'Waste Deposit',
            detail:'3 kg of waste',
            nominal:100000

        },
        {
            userID:'23jknfkn9ng95',
            transactionID: '1239439494985u43u58',
            date:'24/10/20',
            type:'Waste Deposit',
            detail:'3 kg of waste',
            nominal:100000

        },
        {
            userID:'23jknfkn9ng95',
            transactionID: '1239439494985u43u58',
            date:'24/10/20',
            type:'Waste Deposit',
            detail:'3 kg of waste',
            nominal:100000

        },
        {
            userID:'23jknfkn9ng95',
            transactionID: '1239439494985u43u58',
            date:'24/10/20',
            type:'Waste Deposit',
            detail:'3 kg of waste',
            nominal:100000

        },
        {
            userID:'23jknfkn9ng95',
            transactionID: '1239439494985u43u58',
            date:'24/10/20',
            type:'Waste Deposit',
            detail:'3 kg of waste',
            nominal:100000

        },
        {
            userID:'23jknfkn9ng95',
            transactionID: '1239439494985u43u58',
            date:'24/10/20',
            type:'Waste Deposit',
            detail:'3 kg of waste',
            nominal:100000

        }
    ]
    return (
        <>
            <NavAdmin/>
            <div className='d-flex flex-column recap-container'>
                <div class="input-group mb-3 input-search align-self-end">
                    <input type="text" class="form-control" placeholder="Seacrh By Transaction ID" aria-label="Seacrh By Transaction ID" aria-describedby="button-addon2" />
                    <button class="btn btn-outline-secondary" type="button" id="button-addon2">Search</button>
                </div>
                <div className='col-12'>
                    <div className='filter col-8 d-flex '>
                        <select className='input-admin' onChange={handleFilter}>
                            {/* <option selected value="">Choose Filter By...</option> */}
                            <option className='select-filter' selected value='filter by id'>Filter By Id</option>
                            <option className='select-filter' value="filter by type">Filter By Type</option>
                        </select>
                        <div className='ms-3 col-4'>
                            {filterById?<FilterById />:<FilterByType />}
                        </div>
                        <button className='button-recap-filter ms-3 px-4 back-color-green'>filter</button>
                    </div>
                </div>
                <div className='mt-5'>
                    {data.map(x=><RecapDataElement item={x}/>)}
                </div>
                
                <div className='ms-auto me-auto mt-5'>
                    <button className='button-recap py-1 px-4 back-color-green'>see more...</button>
                </div>
            </div>
            <Footer/>
        </>
    )
}
