import React, { useState } from 'react'

export default function Curd() {
    const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  
  const [projectName, setProjectName] = useState("");

  const [phone, setPhone] = useState("");
  const [startDate, setStartDate] = useState('')
  const [endDate, setEndDate] = useState('')

  const [data, setData] = useState([]);

  const Submit = (e) => {
    e.preventDefault();
    if(name&&email&&projectName&&phone&&startDate&&endDate){
        const newEntry = {
            name: name,
            email: email,
          
            phone: phone,
            projectName: projectName,
            startDate:startDate,
            endDate:endDate
          }
          const Id={id:new Date().getTime().toString()}
          setData([...data, newEntry,Id]);
          console.warn(data);
          setName('')
          setEmail('')
          setProjectName('')
    }
    else{
        alert('Plz fill all data')
    }
   
  };

  const deleteHandler=()=>{
    setData([''])
  }
  

  return (
    <>
      <div className="container mt-5">
        <div className="row">
          <div className="col-2 ml-3">
            <h1>TODO List</h1>
            <form className="form-group" action="" onSubmit={Submit}>
              <input
                className="form-label"
                type="text"
                placeholder="Enter Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required={true} 
              />
              <input
                className="form-label"
                type="email"
                placeholder="Enter your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                className="form-label"
                type="tel"
                placeholder="Enter your No"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />

              <input
                className="form-label"
                type="text" 
                placeholder="Enter Your project Name"
                value={projectName}
                onChange={(e) => setProjectName(e.target.value)}
              />

              <input
                className="form-label"
                type="date"
                value={startDate} onChange={(e)=>setStartDate(e.target.value)}
                placeholder="StartDate"
              />

              <input
                className="form-label"
                type="date" value={endDate} onChange={(e)=>setEndDate(e.target.value)}
                placeholder="Target Date"
              />
              <br />
              <button className="btn btn-primary mb-3" type="submit">
                Submit
              </button>
              <button className="btn btn-danger"  onClick={deleteHandler} type="reset">
                DeletTableData
              </button>
            </form>
            <div>
              {/* {data.map((cur, id) => {
                return (
                  
                  <table className="table table-hover md-8">
                    <thead>
                      <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Project Name</th>
                        <th>Start Date</th>
                        <th>End Date</th>
                        <th>Delete</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>{cur.id}</td>
                        <td>{cur.name}</td>
                        <td>{cur.email}</td>
                        <td>{cur.phone}</td>
                        <td>{cur.projectName}</td>
                        <td>{cur.startDate}</td>
                        <td>{cur.endDate}</td>
                      </tr>
                    </tbody>
                  </table>
                );
              })} */}

            </div>
          </div>
        </div>
      </div>
      <div className="container mt-5">
        <div className="row">
          <div className="col">
            <table className="table table-hover">
              <thead>
              <tr>
                     
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Project Name</th>
                        <th>Start Date</th>
                        <th>End Date</th>
                        {/* <th>Delete</th> */}
                      </tr>
              </thead>
              <tbody>
                {/* {
                 data.map((cur,index) => {
                  return (
                    <tr key={index}>
                    
                    <td>{cur.name}</td>
                    <td>{cur.email}</td>
                    <td>{cur.phone}</td>
                    <td>{cur.projectName}</td>
                    <td>{cur.startDate}</td>
                    <td>{cur.endDate}</td>
                    
                  </tr>


                  )
                 })
                } */}
                {
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
                }
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};