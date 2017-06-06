//take raw dollar amount (string or number) and add commas using toLocaleString
export const formatDollarValues = (numString) => {
  if(numString == ""){
    return '0';
  }

  if(isNaN(numString)){
    return '0';
  }

  let number = Number(numString);
  let formattedNumber = number.toLocaleString("en");
  return formattedNumber;
}

//take array of expense objects and calculate total amount
export const calcTotalExpenses = (expenses) => {
  const totalExpenses = expenses.reduce((total, expense, curr)=> {
    return total + expense.amount
  }, 0)

  return totalExpenses;
}
