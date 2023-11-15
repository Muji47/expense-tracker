
export const depositMoney=(data)=>{
    if(window.location.href.includes('income')){        
    return{
    type:"MONEY_DEPOSITE",
    data:data
    }}else{
        return {
            type:"MONEY_WITHDRAWAL",
            data:data
        }
    }
} 
export const clearTransaction=()=>{
    return{
    type:"CLEAR"
    }
} 