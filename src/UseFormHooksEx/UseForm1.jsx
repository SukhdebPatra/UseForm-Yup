import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { object, string, number, date } from "yup";

const validate = yup.object({
  name: yup.string().min(3, `Min 3 char is required`).required(),
  gender: string().nullable().required("A radio option is required"),
  email: string().email().required(),
  phone: yup.number().required().positive().integer(),
  date: date()
    .default(() => new Date())
    .required(),
    condition:yup.string().oneOf([true],'plx select one')
});

const UseForm1 = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(validate) });

  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <>
      <h1 className="text-center">UseForm1 ex 1</h1>
      <form action="" onSubmit={handleSubmit(onSubmit)}>
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <input
                type="text"
                className="form-control"
                placeholder="Enter Your Name"
                name="name"
                id="name"
                {...register("name")}
              />
              <p className="text-danger">{errors.name?.message}</p>
            </div>
            <div className="col-md-4">
              <input
                type="text"
                className="form-control"
                placeholder="Enter Your Email"
                name="email"
                id="email"
                {...register("email")}
              />
              <p className="text-danger">{errors.email?.message}</p>
            </div>
            <div className="col-md-4">
              <input
                type="text"
                className="form-control"
                placeholder="Enter Your No"
                name="phone"
                id="phone"
                {...register("phone")}
              />
              <p className="text-danger">{errors.phone?.message}</p>
            </div>
            <div className="col-md-4">
              <div className="form-group">
                <input
                  type="radio"
                  value="male"
                  name="gender"
                  id="1"
                  {...register("gender")}
                />
                <label htmlFor="">Male</label>
              </div>
              <div className="form-group">
                <input
                  type="radio"
                  value="female"
                  name="gender"
                  id="2"
                  {...register("gender")}
                />
                <label htmlFor="">FeMale</label>
              </div>
              <div className="form-group">
                <input
                  type="radio"
                  value="others"
                  name="gender"
                  id="3"
                  {...register("gender")}
                />
                <label htmlFor="">Others</label>
              </div>
              <p className="text-danger">{errors.gender?.message}</p>
            </div>
            <div className="col-md-4">
              <div>
                <label htmlFor="">Enter A date</label>
                <input
                  className="form-control"
                  type="date"
                  name="date"
                  id=""
                  {...register("date")}
                />
                <p className="text-danger">{errors.date?.message}</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="form-check">
                <input className="form-check-input"  type="checkbox" name="condition" id="" {...register('condtion')} />
                <label className="form-check-label"  htmlFor="">check box a is selectd</label>
                <p className="text-info">{errors.condition?.message}</p>
              </div>
              <div className="form-check">
                <input className="form-check-input"  type="checkbox" name="condition" id="" {...register('condtion')} />
                <label className="form-check-label"  htmlFor="">checkbox B is selected</label>
                <p className="text-info">{errors.condition?.message}</p>
              </div>
            </div>
          </div>
        </div>
        <button className="btn btn-outline-info">submit</button>
      </form>
    </>
  );
};

export default UseForm1;
