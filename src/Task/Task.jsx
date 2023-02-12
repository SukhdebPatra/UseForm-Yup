import React, { useState, useEffect } from "react";

const Task = () => {
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
  const [formerrors, setFormerrors] = useState({});
  const [issubmit, setISsubmit] = useState(false);
  const changehandler = (e) => {
    setFormvalues({ ...formvalues, [e.target.name]: e.target.value });
  };
  const submithandler = (e) => {
    e.preventDefault();
    console.log(formvalues);
    setFormerrors(validate(formvalues));
    setISsubmit(true);
  };
  const validate = (values) => {
    const errors = {};
    if (!values.address1) {
      errors.address1 = "Enter Address field";
    }
    if (!values.address2) {
      errors.address2 = "Enter Address field";
    }
    if (!values.city) {
      errors.city = "Enter your city";
    }
    if (!values.state) {
      errors.state = "Enter Your State";
    }
    if (!values.zipcode) {
      errors.zipcode = "Enter your zipcode";
    }
    if (!values.country) {
      errors.country = "Enter your Country";
    }
    if (!values.date) {
      errors.date = "Enter Date field";
    }
    if (!values.social_secr) {
      errors.social_secr = "Enter this field";
    }
    if (!values.status) {
      errors.status = "Please fill this field";
    }
    if (!values.file) {
      errors.file = "Please Upload file";
    }
    return errors;
  };
  useEffect(() => {
    if (Object.keys(formerrors).length === 0 && issubmit) {
      console.log(formerrors);
    }
  }, []);
  return (
    <div className="container mt-5">
      {/* <pre>{JSON.stringify(formvalues)}</pre> */}
      <div className='row d-flex justify-content-center align-items-center h-100"'>
        <div className="col">
          <h2 className="text-center mb-3">Verify Your Indentify</h2>
          <h6 className="mb-4">
            Please enter a valid mailing address of your primary residence along
            with few of your personal details for indentity Verification.Please
            do not useA PO Box
          </h6>
          <form onSubmit={submithandler}>
            {/* line1 */}
            <div className="row">
              <div className="col col-md-6 mb-2">
                <div className="form-group">
                  <label>Mailing Address line 1</label>
                  <input
                    type="text"
                    className="form-control"
                    name="address1"
                    value={formvalues.address1}
                    onChange={changehandler}
                  />
                  <p className="text-danger">{formerrors.address1}</p>
                </div>
              </div>
              <div className="col col-md-6 mb-2">
                <div className="form-group">
                  <label>Mailing Address line 2</label>
                  <input
                    type="text"
                    className="form-control"
                    name="address2"
                    value={formvalues.address2}
                    onChange={changehandler}
                  />
                  <p className="text-danger">{formerrors.address2}</p>
                </div>
              </div>
            </div>
            {/* line2 */}
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
                  <p className="text-danger">{formerrors.city}</p>
                </div>
              </div>
              <div className="col col-md-3 mb-2">
                <div className="form-group">
                  <label>State</label>
                  <select
                    className="form-control"
                    name="state"
                    onChange={changehandler}
                  >
                    <option>select</option>
                    <option>AP</option>
                    <option>TN</option>
                    <option>KA</option>
                    <option>TN</option>
                    <option>KE</option>
                  </select>
                  <p className="text-danger">{formerrors.state}</p>
                </div>
              </div>
              <div className="col col-md-3 mb-2">
                <div className="form-group">
                  <label>Zip Code</label>
                  <input
                    type="number"
                    className="form-control"
                    name="zipcode"
                    value={formvalues.zipcode}
                    onChange={changehandler}
                  />
                  <p className="text-danger">{formerrors.zipcode}</p>
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
                  <p className="text-danger">{formerrors.country}</p>
                </div>
              </div>
            </div>
            {/*  line3*/}
            <div className="row ">
              <div className="col col-md-3">
                <div className="form-group">
                  <label>Date of Birth</label>
                  <input
                    type="date"
                    className="form-control"
                    name="date"
                    value={formvalues.date}
                    onChange={changehandler}
                  />
                  <p className="text-danger">{formerrors.date}</p>
                </div>
              </div>
              <div className="col col-md-3">
                <div className="form-group">
                  <label>Social Security Last 4</label>
                  <input
                    type="number"
                    className="form-control"
                    name="social_secr"
                    value={formvalues.social_secr}
                    onChange={changehandler}
                  />
                  <p className="text-danger">{formerrors.social_secr}</p>
                </div>
              </div>
              <div className="col col-md-6 ">
                <h5 className="text-center mb-4">
                  Select an Indentification to upload
                </h5>
                <div className="form-check form-check-inline mr-5">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="status"
                    value="drivers licence"
                    onChange={changehandler}
                  />
                  <label className="form-check-label">Drivers License</label>
                </div>

                <div className="form-check form-check-inline mr-5">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="status"
                    value="state issues-id"
                    onChange={changehandler}
                  />
                  <label className="form-check-label">State Issued-ID</label>
                </div>

                <div className="form-check form-check-inline mr-5">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="status"
                    value="passport"
                    onChange={changehandler}
                  />
                  <label className="form-check-label">Passport</label>
                </div>
                <p className="text-danger">{formerrors.status}</p>
              </div>
            </div>

            {/* content2 */}
            <div className="row text-center ">
              <div className="col  border p-3 mb-3">
                <div className="border-gray-300 border-dashed">
                  <p className="text-danger">{formerrors.file}</p>
                  <input
                    type="file"
                    name="file"
                    value={formvalues.file}
                    onChange={changehandler}
                  />

                  <br />
                  <label className="form-label mb-3">
                    <u>Upload Driving License</u>
                  </label>
                  <br />
                  <span>JPEGS and PNGS.Max file size :[filesize]</span>
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
  );
};

export default Task;
