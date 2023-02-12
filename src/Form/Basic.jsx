import React, { useState } from 'react'

export default function Basic() {
    const [enterName, setEnterName] = useState('')
    const [favMovie, seTFavMovie] = useState('')
    const [radio, setRadio] = useState(false)

    const Submitfrom=(e)=>{
    e.preventDefault()
    console.log('All data ',enterName,favMovie,radio)
    }
  return (
    <>
    <h1>Form</h1>
    <form action="" onSubmit={Submitfrom}>
        <input type="text" placeholder='Enter name' value={enterName} onChange={(e)=>setEnterName(e.target.value)}/>
        <select name="" id="" value={favMovie} onChange={(e)=>seTFavMovie(e.target.value)}>
            <option value="Marvel">Marvel</option>
            <option value="DC">DC</option>
        </select>
        <br /><br />
        <div style={{marginTop:'10%'}}>
        <label style={{marginRight:'10%'}}>Radio Button</label>
        <input type="checkbox" className='form-check-input' name="" id=""value={radio} onChange={(e)=>setRadio(e.target.checked)} />
        </div>
       
        <button type="submit" className="btn btn-primary">Submit</button>
    </form>
    </>
  )
}
