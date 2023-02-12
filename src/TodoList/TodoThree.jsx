import React, { useState } from "react";

export const TodoThree = () => {
  const [items, setItems] = useState("");
  const [data, setData] = useState([]);

  const additem = () => {
    setData([...data, items]);
    setItems("");
  };
  const deleteItem=(id)=>{
const updateditems=data.filter((ele,ind)=>{
    return  ind!==id
})
setData(updateditems)
  }

  return (
    <>
      <h1 className="text-center">TodoThree</h1>
      <input
        type="text"
        value={items}
        placeholder="Enter Your Todo"
        className="form-control"
        onChange={(e) => setItems(e.target.value)}
      />
      <button onClick={additem} className="btn btn-info mt-2">
        Add Item
      </button>
      <div>
        {data.map((ele, ind) => {
          return <li key={ind}>{ele}
          <button className="btn btn-danger" onClick={()=>deleteItem(ind)}>DeleteItem</button></li>;
        })}
      </div>
    </>
  );
};
