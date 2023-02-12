import React, { useEffect, useState } from 'react'
import { Navbar } from '../Component/Navbar'

const ApiCall2 = () => {
    const [getDataApi,setGetDataApi]=useState([])

const getApiCall=()=>{
    fetch(`https://jsonplaceholder.typicode.com/users`).then((res)=>res.json()).then((data)=>{
        setGetDataApi(data)
    })
}

    useEffect(()=>{
        getApiCall()
    },[])


    // delete one user data

    const deleteUser=(id)=>{
        fetch(`https://jsonplaceholder.typicode.com/users/${id}`,{
            method:'DELETE'
        }).then((result)=>{
            result.json().then((res)=>{
                console.log(res)
                getApiCall(id)
            })
        })
    }
  return (
    <div>
        {/* <Navbar/> */}
        <div className="container">
            <div className="row">
                <div className="col">
                    <table className='table table-dark'>
                        <thead className='table table-light'>
                            <tr>
                                <th>Id</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Opration</th>
                            </tr>
                        </thead>
                        <thead>
                            {
                                getDataApi.map((ele)=>{
                                    return (
                                        <tr key={ele.id}>
                                            <td>{ele.id}</td>
                                            <td>{ele.name}</td>
                                            <td>{ele.email}</td>
                                            {/* <button onClick={()=>deleteUser(ele.id)} className='btn btn-danger'>delete</button> */}
                                            <td>
                                                <button className='btn btn-info' onClick={()=>deleteUser(ele.id)}>Del</button>
                                            </td>
                                        </tr>
                                    )
                                })
                            }
                        </thead>
                    </table>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ApiCall2