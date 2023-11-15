import React, { useContext, useEffect, useState } from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import { Button, Select, TextField } from "@mui/material";
import { ExpenseDetails, IncomeDetails } from "../App";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import {depositMoney} from '../action/index'

function Descriptionofitems(props) {

  const handleTrack=props.handleTrack
  const detailsOfIncomecat = useContext(IncomeDetails);
  const detailsOfExpensecat = useContext(ExpenseDetails);
  const [categor, setCategory] = useState([]);
  const [itemDetail,setItemDetail]=useState({
    categoryDetail:'',
    categoryDescription:'',
    categoryPrice:0,
    categoryDate:''
  })
  const widthInput = {
    width: "80vw",
    margin: ".8rem",
  };
  useEffect(() => {
    if (window.location.href.includes("expense")) {
      setCategory(detailsOfExpensecat);
    } else {
      setCategory(detailsOfIncomecat);
    }
  }, [categor]);
  return (
    <div>
      <div className="h-[65vh] fixed bottom-0 bg-white rounded-t-lg w-screen flex flex-col items-center">
      <FormControl sx={widthInput}>
        <InputLabel id="demo-simple-select-label">category</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"          
          label="category"
          value={itemDetail.categoryDetail}
          onChange={(e)=>setItemDetail({...itemDetail,categoryDetail:e.target.value})}
        >
          {
            categor.map(item=>
          <MenuItem value={item.category} sx={{width:33}}>{item.category}</MenuItem>
          )}
        </Select>
      </FormControl>
        <TextField
          id="filled-basic"
          label="description"
          variant="outlined"
          sx={widthInput}
          onChange={(e)=>setItemDetail({...itemDetail,categoryDescription:e.target.value})}
        />
        <TextField
          id="filled-basic"
          label="price"
          variant="outlined"
          sx={widthInput}
          type="number"
          onChange={(e)=>setItemDetail({...itemDetail,categoryPrice:e.target.value})}
        />
        <input type="date" className="w-[80vw] p-3 focus:outline-blue-500" onChange={(e)=>setItemDetail({...itemDetail,categoryDate:e.target.value})}/>
        <Link to="/">
          <Button variant="contained" sx={widthInput} onClick={()=>handleTrack(itemDetail)}>
            Continue
          </Button>
        </Link>
      </div>
    </div>
  );
}
const dispatchStore=dispatch=>({
  handleTrack:(data)=>dispatch(depositMoney(data)),
})

export default connect(null,dispatchStore)(Descriptionofitems)