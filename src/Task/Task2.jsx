import React, { useState, useEffect } from "react";

const addressValidation="([^\d])\d{10}([^\d])"

const Task2 = () => {
  const [formvalues, setFormvalues] = useState({
    address1: "",
    address2: "",
    city: "",
    state: "",
    zipcode: "",
    country: "",
    date: "",
    social_secr: "",
    status: "",
    file: "",
  });
  const [formerrors, setFormerrors] = useState([]);
  const [issubmit, setISsubmit] = useState(false);

  const changehandler = (e) => {
    setFormvalues({ ...formvalues, [e.target.name]: e.target.value });
  };

  const submithandler=(e)=>{
    e.preventDefault()
    // console.log(formvalues)
    setFormerrors(validate(formvalues))
    setISsubmit(true);
    console.log(formvalues)

    
  }
const validate=(values)=>{
    const errors={}
    if(!values.address1){
        errors.address1='Enter Address field'
    }
    
    
    return errors;
}

useEffect(()=>{
    if(Object.keys(formerrors).length ===0 && issubmit){
        console.log(formerrors)
    }
},[])
  return (
    <>
      <div className="container mt-5">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col">
            <h2 className="text-center mb-3">Varify Your Identity</h2>
            <h6 className="mb-4">
              Please enter a valid mailing address of your primary residence
              along with few of your personal details for indentity
              Verification.Please do not useA PO Box
            </h6>
            <form onSubmit={submithandler}>  
              {/* line 1 */}
              <div className="row">
                <div className="col col-md-6 mb-2">
                  <div className="form-group">
                    <label>Mailing Address line 1</label>
                    <input
                      type="text"
                      name="address1"
                      className="form-control"
                      value={formvalues.address1}
                      onChange={changehandler}
                    />
                    <p className="text-danger">{formerrors.address1}</p>
                  </div>
                </div>
                <div className="col col-md-6 mb-2">
                  <div className="form-group">
                    <label>Mailling Adress 2</label>
                    <input
                      type="text"
                      name="address2"
                      className="form-control"
                      value={formvalues.address2}
                      onChange={changehandler}
                    />
                  </div>
                </div>
              </div>
              {/* line 2 */}
              <div className="row">
                <div className="col col-md-3 mb-2">
                  <div className="form-group">
                    <label>City</label>
                    <input
                      type="text"
                      className="form-control"
                      name="city"
                      value={formvalues.city}
                      onChange={changehandler}
                    />
                  </div>
                </div>
                <div className="col col-md-3 mb-2">
                  <div className="form-group">
                    <label>State</label>
                    <select
                      className="form-control"
                      name="state"
                      value={formvalues.state}
                      onChange={changehandler}
                    >
                      <option>Select</option>
                      <option>Jamshedpur</option>
                      <option>Chaibasa</option>
                      <option>Ranchi</option>
                      <option>Bokaro</option>
                      <option>Banglore</option>
                      <option>Delhi</option>
                    </select>
                  </div>
                </div>
                <div className="col col-md-3 mb-2">
                  <div className="form-group">
                    <label>Zip Code</label>
                    <input
                      type="text"
                      className="form-control"
                      name="zipcode"
                      value={formvalues.zipcode}
                      onChange={changehandler}
                    />
                  </div>
                </div>
                <div className="col col-md-3 mb-2">
                  <div className="form-group">
                    <label>Country</label>
                    <input
                      type="text"
                      className="form-control"
                      name="country"
                      value={formvalues.country}
                      onChange={changehandler}
                    />
                  </div>
                </div>
              </div>
              {/* line 3 */}
              <div className="row">
                <div className="col col-md-3">
                  <div className="from-group">
                    <label>Date of Birth</label>
                    <input
                      type="date"
                      name="date"
                      className="form-control"
                      value={formvalues.date}
                      onChange={changehandler}
                    />
                  </div>
                </div>
                <div className="col col-md-3">
                  <div className="from-group">
                    <label>Social Security Last 4</label>
                    <input
                      type="text"
                      name="social_secr"
                      className="form-control"
                      value={formvalues.social_secr}
                      onChange={changehandler}
                    />
                  </div>
                </div>
                <div className="col col-md-6">
                  <h5 className="text-center mb-4">
                    Select An Identification to upload
                  </h5>
                  <div className="form-check form-check-inline mr-5">
                    <input
                      type="radio"
                      name="status"
                      value="drivers licence"
                      onChange={changehandler}
                    />
                    <label className="form-check-label">Drivers License</label>
                  </div>
                  <div className="form-check form-check-inline mr-5">
                    <input
                      type="radio"
                      name="status"
                      value="state issues-id"
                      onChange={changehandler}
                    />
                    <label className="form-check-label">State Issued-ID</label>
                  </div>
                  <div className="form-check form-check-inline mr-5">
                    <input
                      type="radio"
                      name="status"
                      value="passport"
                      onChange={changehandler}
                    />
                    <label className="form-check-label">Passport</label>
                  </div>
                </div>
              </div>
              {/* part 2 */}
              <div className="row text-center">
                <div className="col border p-3 mb-3">
                  <div className="border-gray-300 border-dashed">
                    <input
                      type="file"
                      name="file"
                      value={formvalues.file}
                      onChange={changehandler}
                    />
                    <br />
                    <label className="form-label mb-3">
                      <u>Upload Driving Licence</u>
                    </label>
                    <br />
                    <span>JPEGS and PNGS.Max file size:[filesize]</span>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <button className="btn btn-primary mb-3">Submit</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Task2;
