import * as React from "react";
import AppBar from "@mui/material/AppBar";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import { connect } from "react-redux";
import { Button, Grid, TextField } from "@mui/material";
import { clearTransaction } from "../action";

function BottomAppBar(props) {
  const{setSearchItem,transactionDates,clearData,filteredTransactions}=props



  return (
    <React.Fragment>
      <CssBaseline />
      <Paper square sx={{ pb: "50px" }}>
        <Typography variant="h5" sx={{ p: 2, pb: 0, float: "left" }}>
          Recent Transaction
        </Typography>
        <Button
          variant="contained"
          sx={{ mt: 2 }}
          onClick={clearData}
          color="secondary"
        >
          Clear
        </Button>
        <List sx={{ mb: 2 }}>
          <ListItem sx={{ textAlign: "center" }}>
            <Grid container spacing={2}>
            <Grid item xs={3}> <ListItemText><Typography fontWeight={'bold'} fontSize={18}>Price</Typography></ListItemText></Grid>
            <Grid item xs={3}> <ListItemText><Typography fontWeight={'bold'} fontSize={18}>Detail </Typography></ListItemText></Grid>
            <Grid item xs={3}> <ListItemText><Typography fontWeight={'bold'} fontSize={18}>Description </Typography></ListItemText></Grid>
            <Grid item xs={3}> <ListItemText><Typography fontWeight={'bold'} fontSize={18}>Date</Typography></ListItemText></Grid>
            </Grid>
          </ListItem>
          {filteredTransactions.map((item, index) => (
            <ListItem sx={{ textAlign: "center" }}>
              <Grid container spacing={2}>
              <Grid item xs={3}> <ListItemText>{item.categoryPrice}</ListItemText></Grid>
              <Grid item xs={3}> <ListItemText>{item.categoryDetail}</ListItemText></Grid>
              <Grid item xs={3}> <ListItemText>{item.categoryDescription}</ListItemText></Grid>
              <Grid item xs={3}> <ListItemText>{transactionDates[index]}</ListItemText></Grid>
              </Grid>
            </ListItem>
          ))}
        </List>
      </Paper>
      <AppBar
        position="fixed"
        color="primary"
        sx={{ top: "auto", bottom: 0, padding: 2 }}
      >
        <TextField
          sx={{ backgroundColor: "white", borderRadius: 8 }}
          onChange={(e) => setSearchItem(e.target.value)}
          placeholder="search Item"
        ></TextField>
      </AppBar>
    </React.Fragment>
  );
}

const stateToDispatch = (dispatch) => ({
  clearData: () => dispatch(clearTransaction()),
});
export default connect(null, stateToDispatch)(BottomAppBar);
