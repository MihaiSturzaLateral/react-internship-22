import React from 'react';
import Slider from '@mui/material/Slider';
import Box from "@mui/material/Box";
import './CheckTool.css';
import Footer from './Footer';
import { createTheme } from '@mui/material/styles';
import CheckToolCard from './CheckToolCard';


const CheckTool = () => {

  const theme = createTheme({
    palette: {
      primary: {
        main: '#dc3545',
      }
    }
  });

    return (
        <div className='checktoolPage'>
          <div>
          <h4 className='checkTitle'>Check Tool</h4>
            <form className='checkForm'>
  <div class="form-group">
    <label for="exampleInputEmail1">First Name</label>
    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter First Name"/>
  </div><br/>
  <div class="form-group">
    <label for="exampleInputPassword1">Last Name</label>
    <input type="text" class="form-control" id="exampleInputPassword1" placeholder="Enter Last Name"/>
  </div><br/>
  <div>
  <h6 className='nationality'>Nationality </h6>
  <select class="form-select" aria-label="Default select example">
  <option selected>Select Nationality</option>
  <option value="1">RO</option>
  <option value="2">EN</option>
  <option value="3">AE</option>
</select>
</div><br/>
  <Box width={300}>
  <label>Min age:</label>
  <Slider defaultValue={50} aria-label="Default" valueLabelDisplay="auto" className='minAge' />
  <label>Max age:</label>
  <Slider defaultValue={50} aria-label="Default" valueLabelDisplay="auto" className='maxAge'/>
  </Box>
  <div className='radios'>
  <div class="form-check">
  <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1"/>
  <label class="form-check-label-m" for="exampleRadios1">
    Male
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="option2"/>
  <label class="form-check-label-f" for="exampleRadios2">
    Female
  </label>
</div>
</div><br/>
<div>
  <button type="button" class="btn btn-danger">Search</button>
  </div>
</form>
</div>
<div className='results'><span class="badge badge-danger">Results: 890</span></div><br/>
<div className='ckeckcards'>
<CheckToolCard />
<CheckToolCard />
<CheckToolCard />
<CheckToolCard />
<CheckToolCard />
<CheckToolCard />
</div>
        </div>
    )
}

export default CheckTool;