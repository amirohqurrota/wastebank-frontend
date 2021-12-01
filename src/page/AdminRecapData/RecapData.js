import {React, useEffect} from 'react'
import useState from 'react-hook-use-state'
import FilterById from '../../component/FilterRecap/FilterById'
import FilterByType from '../../component/FilterRecap/FilterByType'
import NavAdmin from '../../component/Navbar/NavAdmin'
import Footer from '../../component/footer/Footer'
import './Recap.css'
import RecapDataElement from '../../component/RecapData/RecapDataElement'
import {gql, useMutation, useQuery,useLazyQuery, useSubscription} from "@apollo/client";


const TRANSACTION=gql`
query transactionHist {
    transaction{
      nominal
      date
      desc
      transaction_type {
        name
      }
      id
      id_user
    }
  }
  `;

const FILTER_ID_USER=gql`
query transactionHistById ($idUser:Int!) {
    transaction(where: {id_user: {_eq: $idUser}}) {
      id_user
      nominal
      date
      desc
      transaction_type {
        name
      }
      id
    }
  }
  `;

const FILTER_TYPE=gql`
  query filterByType($idType: Int!) {
      transaction(where: {id_type: {_eq: $idType}}){
        nominal
        date
        desc
        transaction_type {
          name
        }
        id
      }
      }`
export default function RecapData() {
    const {loading, error,data: dataHistory}=useQuery(TRANSACTION);
    const [filterByIdUser, {loading:loadFilterId, error:errFilterId,data: dataFilteredById}]=useLazyQuery(FILTER_ID_USER);
    const [filterByType, {loading:loadFilterType, error:errFilterType,data: dataFilteredByType}]=useLazyQuery(FILTER_TYPE);
    // const [transactionView, setTransactionView]=useState(dataHistory?.transaction)

    useEffect(() => {
        setFilteredData(dataFilteredById?.transaction)
    }, [dataFilteredById])

    useEffect(() => {
        setFilteredData(dataFilteredByType?.transaction)
    }, [dataFilteredByType])
    const [idUser,setIdUser]=useState("")
    const [idType,setIdType]=useState()
    const [filterById, setFilterById]=useState(true)
    const [valueFilter, setValueFilter]=useState('filter by id')
    const [filteredData, setFilteredData]=useState()
    const handleFilter=e=>{
        if (valueFilter==='filter by id'){
            setFilterById(false)
            
        }
        if (valueFilter==='filter by type'){
            setFilterById(true)
            
        }
        setValueFilter(e.target.value)
        // console.log("change , " , valueFilter)
        
    }

    const filterSubmit=()=>{
        if(valueFilter==='filter by id'){
            filterByIdUser({
                variables:{
                    idUser
                }
            })
            setFilteredData(dataFilteredById?.transaction)
            console.log(idUser)
            

        }
        if(valueFilter==='filter by type'){
            filterByType({
                variables:{
                    idType
                }
            })
            setFilteredData(dataFilteredByType?.transaction)
            // console.log("id type",filteredData)
        }
        
    }

    const filterReset=()=>{
        setFilteredData()
    }
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
                            <option className='select-filter' value='filter by id'>Filter By Id User</option>
                            <option className='select-filter' value="filter by type">Filter By Type</option>
                        </select>
                        <div className='ms-3 col-4'>
                            {filterById?<FilterById setID={setIdUser} ID={idUser}/>:<FilterByType idType={idType} setIdType={setIdType} />}
                        </div>
                        <button className='button-recap-filter filter-submit ms-3 px-4 back-color-green' onClick={filterSubmit}>filter</button>
                        <button className='button-recap-filter reset ms-3 px-4 back-color-green' onClick={filterReset}>reset</button>
                    </div>
                </div>
                <div className='mt-5'>
                    {filteredData?(filteredData?.map((x,index)=><RecapDataElement key={index} item={x}/>)):dataHistory?.transaction?.map(x=><RecapDataElement item={x}/>)}
                    {/* {dataHistory?.transaction?.map(x=><RecapDataElement item={x}/>)} */}
                </div>
                
                <div className='ms-auto me-auto mt-5'>
                    <button className='button-recap py-1 px-4 back-color-green'>see more...</button>
                </div>
            </div>
            <Footer/>
        </>
    )
}
