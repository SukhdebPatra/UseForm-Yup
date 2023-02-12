import React, { useEffect, useState } from 'react'
import { Navbar } from '../Component/Navbar'

const ApiCall3 = () => {
    const [api, setApi] = useState([])


const getapi=()=>{
    fetch(`https://jsonplaceholder.typicode.com/todos`).then((res)=>res.json()).then((data)=>{
        setApi(data)
    })
    // console.log(api)
}

   useEffect(() => {
     getapi()
   }, [])
   

  return (
    <>
    <Navbar/>
    <table className='table table-info'>
        <thead className='thead-dark'>
            <tr>
                <th>userId</th>
                <th>id</th>
                <th>title</th>
            </tr>
        </thead>
        <tbody className='primary'>
            {
                api.map((ele,id)=>{
                    return(
                        <tr key={id}>
                            <td>{ele.userId}</td>
                            <td>{ele.id}</td>
                            <td>{ele.title}</td>
                        </tr>
                    )
                })
            }
        </tbody>
    </table>

    </>
  )
}

export default ApiCall3