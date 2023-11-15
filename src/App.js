import { BrowserRouter, Routes,Route } from 'react-router-dom';
import './App.css';
import Home from './routes/Home';
import Expense from './routes/Expense';
import Income from './routes/Income';
import { createContext } from 'react';

export const IncomeDetails=createContext()
export const ExpenseDetails=createContext()
function App() {
  const categoryOfIncome=[
      {
        id:1,
        category:'Income'
      },
      {
        id:2,
        category:'Pocket money'
      },
      {
        id:3,
        category:'Business'
      },
      {
        id:4,
        category:'Other resources'
      }
    ]
  const categoryOfExpense=[
      {
        id:1,
        category:'Shopping'
      },
      {
        id:2,
        category:'Outing'
      },
      {
        id:3,
        category:'Self-gromming'
      },
      {
        id:4,
        category:'Other'
      }
    ]
    console.log(categoryOfExpense)
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/income' element={
            <IncomeDetails.Provider value={categoryOfIncome}>
          <Income/>
          </IncomeDetails.Provider>
          }/>
          <Route path='/expense' element={
          <ExpenseDetails.Provider value={categoryOfExpense}>
          <Expense/>
          </ExpenseDetails.Provider>
          }/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
