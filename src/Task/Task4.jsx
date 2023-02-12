import React from "react";
import { useState } from "react";

const Task4 = () => {
  const [formvalues, setFormvalues] = useState({
    name: "",
    email: "",
    phone: "",
    address:'',
  });
  const [data,setData]=useState([])
  const changehandler = (e) => {
    setFormvalues({ ...formvalues, [e.target.name]: e.target.value });
  };

  const submithandler=(e)=>{
e.preventDefault()
console.log(formvalues)
setData([...data,formvalues])
  }
  return (
    <>
      {" "}
      <h1 className="text-center"> Form Validation Task4</h1>
      <form action="">
        <div className="container">
          <div className="row">
            <div className="col">
              <input
                type="text"
                className="form-control"
                placeholder="Enter a Name"
                value={formvalues.name}
                name='name'
                onChange={changehandler}
              />
            </div>
            <div className="col">
              <input
                type="text"
                className="form-control"
                placeholder="Enter a Email"
                value={formvalues.email}
                name='email'
                onChange={changehandler}
              />
            </div>
            <div className="col">
              <input
                type="text"
                placeholder="Enter a Phone"
                className="form-control"
                value={formvalues.phone}
                name='phone'
                onChange={changehandler}
              />
            </div>
          </div>
          <div className="row">
            <div className="col-md-3">
                <input type="text" placeholder="Enter Your Address" className="form-control mt-2" name="address" id="" value={formvalues.address} onChange={changehandler}  />
            </div>
          </div>
        </div>
        <button onClick={submithandler} className="btn btn-info">Submit</button>
        <table className="table table-hover">
            <thead>
            <tr>
            <th>Name</th>
            <th>Email</th>
            <th>phone</th>
            <th>Address</th>
           </tr>
            </thead>
            <tbody>
                {
                    data.map((ele,ind)=>{
                        return(
                            <tr key={ind}>
                                <td>{ele.name}</td>
                                <td>{ele.email}</td>
                                <td>{ele.phone}</td>
                                <td>{ele.address}</td>

                            </tr>

                        )
                    })
                }
            </tbody>
        </table>
      </form>
    </>
  );
};

export default Task4;
