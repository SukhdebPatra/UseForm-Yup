import { yupResolver } from "@hookform/resolvers/yup";
import React from "react";
import { useForm } from "react-hook-form";
import * as yup from 'yup'

const schema=yup.object({
name:yup.string().min(3,'Minimum Three Charcters are required').required(),
email:yup.string().email().required()
})

export const Yup3 = () => {
    const {register,handleSubmit,formState:{errors}}=useForm({
        resolver:yupResolver(schema)
    })
    const onSubmit=(data)=>console.log(data)
  return (
    <>
      <h1 className="text-center mt-2">Form Validation using Yup</h1>
      <div className="contaner mt-5">
        <div className="row">
          <div className="col col-md-6 mb-2">
            <div className="form-group">
              <label>Enter Name</label>
              <input type="text" className="form-control" name="name" {...register('name')}/>
              <p className="text-danger">{errors.name?.message}</p>
            </div>
            <div className="form-group">
              <label>Enter Email</label>
              <input type="text" className="form-control" name="email"{...register('email')}  />
              <p className="text-danger">{errors.email?.message}</p>
            </div>
          </div>
        </div>
        <button className="btn btn-primary" type="submit"onClick={handleSubmit(onSubmit)}>Submit</button>
        <button className="btn btn-danger" type="reset">Reset</button>
      </div>
    </>
  );
};
