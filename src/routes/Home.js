import React,{useState} from "react"
import Homehead from "../components/Homehead"
import Homeoverview from "../components/Homeoverview"
import BottomAppBar from "../components/Bottombar"
import { connect } from "react-redux";
import moment from "moment";

function Home(props) {
  const [searchitem, setSearchItem] = useState("");
  const {storeData,transactionDates}=props
  const filterArray = storeData.filter((item) => {
    return item.categoryDetail.toLowerCase().includes(searchitem.toLowerCase());
  });
  const filterTransactionsByInterval = (interval) => {
    const today = moment();
    switch (interval) {
      case 'today':
        return filterArray.filter((transaction) =>
          moment(transaction.categoryDate).isSame(today, 'day')
        );
      case 'weekly':
        return filterArray.filter((transaction) =>
          moment(transaction.categoryDate).isSame(today, 'week')
        );
      case 'monthly':
        return filterArray.filter((transaction) =>
          moment(transaction.categoryDate).isSame(today, 'month')
        );
      case 'yearly':
        return filterArray.filter((transaction) =>
          moment(transaction.categoryDate).isSame(today, 'year')
        );
      default:
        return filterArray;
    }
  };
  const [selectedInterval, setSelectedInterval] = useState('all');

 

  const filteredTransactions = filterTransactionsByInterval(selectedInterval);
  return (
    <>
    <Homehead/>
    <Homeoverview setSelectedInterval={setSelectedInterval}/>
    <BottomAppBar filterArray={filterArray} setSearchItem={setSearchItem} transactionDates={transactionDates} filteredTransactions={filteredTransactions}/>
    </>
  )
}
const stateToProps = (state) => ({
  storeData: state.CashDetails.cashData,
  transactionDates: state.CashDetails.transactionDates,
});
export default connect(stateToProps,null)(Home)
