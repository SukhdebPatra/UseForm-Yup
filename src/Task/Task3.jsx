import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup
  .object({
    address1: yup
      .string()
      .min(3, "Minimum char is 3")
      .max(20, "20 Char is max")
      .required("Please Enter Malling Address one"),
    address2: yup
      .string()
      .min(3, "Minimum char is 3")
      .max(20, "20 Char is max")
      .required("Please Enter Malling Address Two"),
    zipcode: yup
      .string("It must be a number")
      .min(3, "Three No min")
      .max(6, "Six Numbers is max")
      .required("Please Enter zip Code"),
    city: yup.string().required("Please Enter Your  City Name"),
    state: yup.string().required(),
    country: yup.string().required("Please Enter  Country Name"),
    date: yup.date().required(),
    social_secr: yup.string().required(),
    status:yup.string().required('Enter data'),
    file: yup.string('enter data').required('enter data'),
  })
  .required();

const Task3 = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => console.log(data);

 
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
            <form onSubmit={handleSubmit(onSubmit)}>
              {/* line 1 */}
              <div className="row">
                <div className="col col-md-6 mb-2">
                  <div className="form-group">
                    <label>Mailing Address line 1</label>
                    <input
                      type="text"
                      name="address1"
                      className="form-control"
                      {...register("address1")}
                    />
                    <p className="text-danger">{errors.address1?.message}</p>
                  </div>
                </div>
                <div className="col col-md-6 mb-2">
                  <div className="form-group">
                    <label>Mailling Adress 2</label>
                    <input
                      type="text"
                      name="address2"
                      className="form-control"
                      {...register("address2")}
                    />
                    <p className="text-danger">{errors.address2?.message}</p>
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
                      {...register("city")}
                    />
                    <p className="text-danger">{errors.city?.message}</p>
                  </div>
                </div>
                <div className="col col-md-3 mb-2">
                  <div className="form-group">
                    <label>State</label>
                    <select
                      className="form-control"
                      name="state"
                      {...register("state")}
                      // onChange={(e) => setValue('select', e.target.value, { shouldValidate: true })} // Using setValue
                      // onChange={(e)=>(e.target.value)}
                    >
                      <option>Select</option>
                      <option name="state">Jamshedpur</option>
                      <option name="state">Chaibasa</option>
                      <option name="state">Ranchi</option>
                      <option value="Bokaro" name="state">
                        Bokaro
                      </option>
                      <option value="Banglore" name="state">
                        Banglore
                      </option>
                      <option value="Delhi" name="state">
                        Delhi
                      </option>
                    </select>
                    <p className="text-danger">{errors.state?.message}</p>
                  </div>
                </div>
                <div className="col col-md-3 mb-2">
                  <div className="form-group">
                    <label>Zip Code</label>
                    <input
                      type="text"
                      className="form-control"
                      name="zipcode"
                      {...register("zipcode")}
                    />
                    <p className="text-danger">{errors.zipcode?.message}</p>
                  </div>
                </div>
                <div className="col col-md-3 mb-2">
                  <div className="form-group">
                    <label>Country</label>
                    <input
                      type="text"
                      className="form-control"
                      name="country"
                      {...register("country")}
                    />
                    <p className="text-danger">{errors.country?.message}</p>
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
                      {...register("date")}
                      className="form-control"
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
                      {...register("social_secr")}
                      //
                    />
                    <p className="text-danger">{errors.social_secr?.message}</p>
                  </div>
                </div>
                <div className="col col-md-6">
                  <h5 className="text-center mb-4">
                    Select An Identification to upload
                  </h5>
                  <div className="form-check form-check-inline mr-5">
                    <input
                      type="radio"
                      id="0"
                      name="status"
                      
                      value="drivers licence"
                      {...register("status")}
                    />
                    <p className="text-danger">{errors.status?.message}</p>
                    <label className="form-check-label">Drivers License</label>
                  </div>
                  <div className="form-check form-check-inline mr-5">
                    <input
                      type="radio"
                      id='1'
                      name="status"
                      value="state issues-id"
                      {...register("status")}
                    />
                    <p className="text-danger">{errors.status?.message}</p>
                    <label className="form-check-label">State Issued-ID</label>
                  </div>
                  <div className="form-check form-check-inline mr-5">
                    <input
                      type="radio"
                      id='2'
                      name="status"
                      value="passport"
                      {...register("status")}
                    />
                    <p className="text-danger">{errors.status?.message}</p>
                    <label className="form-check-label">Passport</label>
                  </div>
                </div>
              </div>
              {/* part 2 */}
              <div className="row text-center">
                <div className="col border p-3 mb-3">
                  <div className="border-gray-300 border-dashed">
                    <input type="file" name="file" {...register("file")} />
                    <p className="text-danger">{errors.file?.message}</p>
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

export default Task3;
