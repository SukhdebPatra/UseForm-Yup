import React, { useEffect, useState } from 'react'
import { Navbar } from '../Component/Navbar';

const One = () => {
    const [data, setData] = useState([])

    // Function to collect data
const getApiData = async () => {
  // e.preventDefault()
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts`
    ).then((response) => response.json()).then((req)=>{
      setData(req)
    })
  console.log(response)
    // update the state
    // setData(data.response);
  };

    useEffect(() => {
       getApiData()
    }, [])
    // console.log(setData)
  return (
    <>
    <Navbar/>
    <h1 style={{textAlign:'center',color:'yellow',backgroundColor:"lightblue"}}>Api call</h1>
    <table className='table'>
      <thead className='thead-striped'>
        <tr>
          <td>UserId</td>
          <td>Title</td>
          <td>Id</td>
        </tr>
      </thead>
      <tbody>
        {/* {data & data.map((ele,id)=>{
          return (
            <tr key={ele.id}>
              <td>{ele.userId}</td>
              <td>{ele.title}</td>
              <td>{ele.id}</td>
            </tr>
          )
        })} */}

        {
          data.map((ele,index)=>{
            return (
              <tr key={index}>
                <td>{ele.id}</td>
                <td>{ele.title}</td>
                <td>{ele.userId}</td>
              </tr>
            )
           
          })
        }



{/* {
                    data.map((ele,index)=>{
                        return (
                            <tr key={index}>
                                <td>{ele.name}</td>
                                <td>{ele.email}</td>
                                <td>{ele.phone}</td>
                                <td>{ele.projectName}</td>
                                <td>{ele.startDate}</td>
                                <td>{ele.endDate}</td>
                            </tr>
                        )
                    })
                } */}
      </tbody>
    </table>
{/* {
  data.map((ele,index)=>{
    return (
      
    )
  })
} */}
    </>
  )
}

export default One