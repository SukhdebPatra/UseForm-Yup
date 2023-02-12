import React, { useState } from 'react'

export const One = () => {
    const [user, setUser] = useState('')
    const [password, setPassword] = useState('')
    const [entry, setEntry] = useState([])
    const [userError, setUserError] = useState(false)

//     const logHandle=(e)=>{
//         e.preventDefault()
//         const UserData={user,password}
//         setEntry([...entry,UserData])
// console.log(entry)

//     }
const logHandle=(e)=>{
  e.preventDefault()
  const data={user,password}
  setEntry([...entry,data])
  console.log(entry)

}
  const  userHandler=(e)=>{
    let item=e.target.value
    if(item.length<3){
      setUserError(true)
    }
    else{
        setUserError(false)
    }
console.log(e.target.value)
    }
    const passwordHandler=(e)=>{
      let itemS=e.target.value
      if(itemS.length<3){
        setUserError(true)
      }
      else{
        setUserError(false)
      }
    }
    
    
  return (
    <>
    <form action="" onSubmit={logHandle}>
    <h1>Form Validation</h1>
    <input type="text" placeholder='Enter User Id' onChange={userHandler} /><br />{userError?<span>User not Valid</span>:''}
    <br/>
    <br />
    <input type="text"  onChange={passwordHandler} placeholder='Password'/>{userError?<span>Password not Valid</span>:''}
    <br />
    <button type="submit">Log In</button>
    </form>
    </>
  )
}
