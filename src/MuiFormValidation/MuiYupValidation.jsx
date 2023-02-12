import {
  Button,
  Grid,
  Paper,
  Radio,
  TextField,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useState } from "react";

const schema = yup
  .object({
    fullName: yup.string().min(5,'Enter Minimum 5 character').max(13,'Enter Maximum 13 character').required(),
    Email: yup
      .string()
      .email("Invalid Email Address Format")
      .required("Email is a required"),
    Phone: yup
      .number("Should be no type")
      .min(3, "2 Characters minimum")
      .required("Phone no is mandatory"),
  })
  .required();

const MuiYupValidation = () => {
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
      <div>
        <Paper>
          <Box px={3} py={2}>
            <Typography variant="h5" align="center">
              React hook Form Matrial Ui Validation
            </Typography>
            <Grid container spacing={1}>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Enter Your Full Name"
                  name="fullName"
                  {...register("fullName")}
                />
                <Typography variant="inherit" color="red">
                  {errors.fullName?.message}
                </Typography>
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Enter Your Email"
                  name="Email"
                  {...register("Email")}
                />
                <Typography variant="inherit" color="red">
                  {errors.Email?.message}
                </Typography>
              </Grid>
              <Grid item sm={6}>
                <TextField
                  label="Enter Your Phone"
                  name="Phone"
                  {...register("Phone")}
                />
                <Typography variant="inherit" color="red">
                  {errors.Phone?.message}
                </Typography>
              </Grid>
              <Grid item sm={6}>
              
              </Grid>
            </Grid>
          </Box>
          <Box mt={3}>
            <Button variant="contained" onClick={handleSubmit(onSubmit)}>
              Register
            </Button>
          </Box>
        </Paper>
      </div>
    </>
  );
};

export default MuiYupValidation;
