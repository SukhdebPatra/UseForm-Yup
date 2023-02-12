import { useEffect, useState } from "react";
import "./form.css";
const imageMimeType = /image\/(png|jpg)/i;
const FormBs = () => {
  const [radioButton, setRadioButton] = useState("passport");
  const [file, setFile] = useState(null);

  const radioButtonHandleChange = (e) => {
    setRadioButton(e.target.value);
    console.log(e.target.value)
  };


  const changeHandler = (e) => {
    const file = e.target.files[0];
    if (!file.type.match(imageMimeType)) {
      alert("Image mime type is not valid");
      return;
    }
    setFile(file);
  };
  return (
    <>
      <div className="center">
        <h1>Varify Your Identity</h1>
        <h5>
          Please enter a valid mailing address of your primary residence along
          with few of your personal details for identy varification . Please do
          not use PO Box
        </h5>
      </div>
      <div style={{ width: "90%" }}>
        <form action="">
          <div style={{ display: "flex" }}>
            <input
              type="text"
              placeholder="Mailing Adrees Line 1"
              className="form-control margin"
            />
            <input
              type="text"
              placeholder="Mailing Adrees Line 2"
              className="form-control margin"
              name=""
              id=""
            />
          </div>
          <div style={{ display: "flex" }}>
            <input
              type="text"
              placeholder="City"
              className="form-control margin mt-3"
            />
            <select className="form-control margin mt-3">
              <option >State...</option>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </select>
            <input type="tel" className="form-control margin mt-3" id="" />
          </div>
          <div style={{ display: "flex", marginTop: "2%" }} className="margin" onChange={radioButtonHandleChange}>
            <label className="ml3">Select An identification to upload</label>
            {/* <div className="form-check form-check-inline"> */}
              <input
                className="form-check-input"
                type="radio"
                name="radioButton"
                value="drivingLicense"
                checked={radioButton==='drivingLicense'}
              />
              <label className="form-check-label" >
                Driving License
              </label>
            {/* </div> */}
            {/* <div className="form-check form-check-inline"> */}
              <input
                className="form-check-input"
                type="radio"
                name="radioButton"
                value="stateId"
                checked={radioButton==='stateId'}
              />
              <label className="form-check-label" >
                State-issued ID
              </label>
            {/* </div> */}
            {/* <div className="form-check form-check-inline"> */}
              <input
                className="form-check-input"
                type="radio"
                name="radioButton"
                value="passport"
                checked={radioButton==='passport'}
              />
              <label className="form-check-label" >
                Passport
              </label>
            {/* </div> */}
          </div>
          <div className="mt-3 margin">
            <input
              type="file"
              accept=".png, .jpg,"
              className="form-control"
              onChange={changeHandler}
            />
          </div>
          <button className="btn btn-primary mt-2" type="submit">
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default FormBs;
