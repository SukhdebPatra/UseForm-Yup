import { TextField } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import "./form.css";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";


const FormValidationTask = () => {
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
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
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 2, width: "50ch" },
        }}
        // noValidate
        autoComplete="off"
      >
        <TextField
          id="outlined-multiline-flexible"
          label="Mailing address Line 1"
          //   multiline
          fullWidth
          //   maxRows={4}
        />
        <TextField
          id="outlined-multiline-flexible"
          label="Mailing address Line 2"
          //   multiline
          //   maxRows={4}
          fullWidth
        />
      </Box>
      <Box
        sx={{
          "& .MuiTextField-root": { m: 2, width: "25ch" },
        }}
      >
        <TextField
          id="outlined-multiline-flexible"
          label="City"
          multiline
          //   maxRows={4}
          // fullWidth
        />
        <FormControl sx={{marginTop:'2.5%',minWidth: 160}}>
          <InputLabel id="demo-simple-select-label">Age</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={age}
            label="Age"
            onChange={handleChange}
          >
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>
        <TextField
          id="outlined-multiline-flexible"
          label="Zip Code"
          
          //   maxRows={4}
          // fullWidth
        />
         <TextField
          id="outlined-multiline-flexible"
          label="Country"
          
          //   maxRows={4}
          // fullWidth
        />
      </Box>
      <Box>
        {/* <input type="date"  name="" id="" /> */}
  
      </Box>
    </>
  );
};

export default FormValidationTask;
