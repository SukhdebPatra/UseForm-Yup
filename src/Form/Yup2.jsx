import { yupResolver } from "@hookform/resolvers/yup";
import React from "react";
import { useForm } from "react-hook-form";
import * as yup from 'yup'


const schema=yup.object({
name:yup.string().required('Please enter your name'),
email:yup.string().required('Please enter your email'),
phone:yup.number().required(),
address:yup.string().required(),
city:yup.string().required()
})

function Yup2() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({resolver:yupResolver(schema)});
  const onSubmit=(data)=>console.log(data)
  return (
    <>
      <h1 className="text-center text-primary">Yup Form Validation</h1>
      <div className="container mt-5">
        <div className="row">
          <div className="col">
            <div>
              <label htmlFor="">Name</label>
              <input
                className="form-control"
                type="text"
                name="name"
                placeholder="Enter Your Name"
                {...register('name')}
              />
              <p className="text-danger">{errors.name?.message}</p>
            </div>
            <div>
              <label htmlFor="">Email</label>
              <input
                type="text"
                name="email"
                placeholder="Enter Your Email Here"
                className="form-control"
                id=""
                {...register('email')}
              />
              <p className="text-danger">{errors.email?.message}</p>
            </div>
            <div className="col">
              <div>
                <label htmlFor="">Phone</label>
                <input
                  className="form-control"
                  type='text'
                  placeholder="Enter Your Phone No Here"
                  name="phone"
                  {...register('phone')}
                />
                <p className="text-danger">{errors.phone?.message}</p>
              </div>
              <div>
                <label htmlFor="">Address</label>
                <input
                  className="form-control"
                  type="text"
                  placeholder="Enter Your Address  Here"
                  name="address"
                  {...register('address')}
                />
                <p className="text-danger">{errors.address?.message}</p>
              </div>
            </div>
            <div className="row">
              <div>
                <label htmlFor="">Select Your City</label>
                <select name="city" id="" className="form-control"  {...register('city')}>
                  <option>Select</option>
                  <option value="Chaibasa">Chaibasa</option>
                  <option value="Jamshedpur">Jamshedpur</option>
                  <option value="Dhanbad">Dhanbad</option>
                </select>
                <p className="text-danger">{errors.city?.message}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <button onClick={handleSubmit(onSubmit)} type="submit" className="btn btn-success mt-3 ">
        Submit Form
      </button>
    </>
  );
}

export default Yup2;
