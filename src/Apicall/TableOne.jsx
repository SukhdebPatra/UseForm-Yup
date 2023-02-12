import React, { useState } from 'react'
import { Navbar } from '../Component/Navbar'

const TableOne = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [address, setAddress] = useState('')
    const [allEntry, setAllEntry] = useState([])

    const handleSubmit=(e)=>{
        e.preventDefault()
        const data={name:name,email:email,address:address}
        setAllEntry([...allEntry,data])
        // console.log('form ')s
       
    }

  return (
    <>
    <Navbar/>
    <div className="container" style={{width:'40rem'}}>
        <div className="row">
            <div className="col">
                <h4>Form </h4>
                <form action="" className='form-inline' onSubmit={handleSubmit}>
                    <label htmlFor="" className='col-sm-2 col-form-label'>Name</label>
                    <input type="text" className='form-control'  name="" id="" value={name} onChange={(e)=>setName(e.target.value)} />
                    <label htmlFor="" className='col-sm-2 col-form-label'>Email</label>
                    <input type="text" className='form-control'  name="" id="" value={email} onChange={(e)=>setEmail(e.target.value)}  />
                    <label htmlFor="" className='col-sm-2 col-form-label'>Address</label>
                    <input type="text" className='form-control'  name="" id="" value={address} onChange={(e)=>setAddress(e.target.value)} />
                    <button type='submit' className='btn btn-secondary btn-lg btn-block mt-3' >Submit</button>
                </form>
            </div>
        </div>
    </div>
    <table className='table table-hover'>
        <thead>
            <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Address</th>
            </tr>
        </thead>
        <tbody>
            {
allEntry.map((ele,index)=>{
    return (
        <tr key={index}>
            <td>{ele.name}</td>
            <td>{ele.email}</td>
            <td>{ele.address}</td>
        </tr>
    )
})
            }
        </tbody>
    </table>
    </>
  )
}

export default TableOne