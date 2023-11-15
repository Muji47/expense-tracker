import moment from "moment";
const  initial={
   cashData:[],
   totalPrice:0,
   income:0,
   expense:0,
   transactionDates: [],
}
export const CashDetails=(state=initial,action)=>{
    switch(action.type){
        case 'MONEY_DEPOSITE': {
            const addAmount = parseInt(action.data.categoryPrice);
            const existing = state.cashData.find(item => item.categoryDetail === action.data.categoryDetail);
          
            if (existing) {
              const updated = state.cashData.map(item => {
                if (item.categoryDetail === action.data.categoryDetail) {
                    
                  return {
                    ...item,
                    categoryPrice: parseInt(item.categoryPrice) + addAmount,
                    categoryDescription:action.data.categoryDescription,
                  };
                }
                return item;
              });
          
              return {
                ...state,
                cashData: updated,
                totalPrice: state.totalPrice + addAmount,
                income: state.income + addAmount,
                };
            } else {
              return {
                ...state,
                cashData: [...state.cashData, action.data],
                totalPrice: state.totalPrice + addAmount,
                income: state.income + addAmount,
                transactionDates: [...state.transactionDates, moment(action.data.categoryDate).calendar()],
              };
            }
          }
          
        case 'MONEY_WITHDRAWAL':{
            const addAmount = parseInt(action.data.categoryPrice);
            const existing = state.cashData.find(item => item.categoryDetail === action.data.categoryDetail);
          
            if (existing) {
              const updated = state.cashData.map(item => {
                if (item.categoryDetail === action.data.categoryDetail) {
                    
                  return {
                    ...item,
                    categoryPrice: parseInt(item.categoryPrice) + addAmount,
                    categoryDescription:action.data.categoryDescription
                  };
                }
                return item;
              });
          
              return {
                ...state,
                cashData: updated,
                totalPrice: state.totalPrice -addAmount,
                expense: state.expense + addAmount,
              };
            }
            else{
            return {
                ...state,
                cashData:[...state.cashData,action.data],
                totalPrice:state.totalPrice-action.data.categoryPrice,
                expense:state.expense+parseInt(action.data.categoryPrice),
                transactionDates: [...state.transactionDates, moment(action.data.categoryDate).calendar()],
            }
        }
        }
        case "CLEAR":{
            return {
                ...state,
            cashData:[],
            totalPrice:0,
            income:0,
            expense:0
            }
        }
        default :
        return state
            
    }
}