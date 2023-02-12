import React, { useState } from 'react'
import { Navbar } from '../Component/Navbar'

const TodoOne = () => {
    const [input,setInput]=useState('')
    const [items,setItems]=useState([])

    const addItem=()=>{
        if(!input){

        }else{
            setItems([...items,input])
            setInput('')
        }
    }

    // Delete a single item
    const deleteItem = (id) => {
        // console.log(id);
        const updateditems = items.filter((ele, ind) => {
          return ind !== id;
        });
        setItems(updateditems);
      };
    
  return (
    <>
    <Navbar/>
    <h1 style={{textAlign:'center',color:'Highlight'}}>Todo</h1>
    <div className="container">
        <div className="row">
            <div className="col">
                <input type="text" value={input} onChange={(e)=>setInput(e.target.value)} placeholder='Add Items...' className='form-control' />
                <button onClick={addItem} className='btn btn-success mt-4'>Add New Items</button>
                <div>
                    {
                        items.map((ele,ind)=>{
                            return(
                                <div key={ind}>
                                   <li>{ele}
                                   <button className='btn btn-danger btn-sm mt-1 ml-3' onClick={()=>deleteItem(ind)}>Delete</button></li>                          
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default TodoOne