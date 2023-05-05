function descendingOrder(num) {
    // Convert the number to a string, split it into an array of digits, and sort them in descending order
    const sortedDigits = String(num).split('').sort((a, b) => b - a);
    
    // Join the sorted digits back into a string and convert it to a number
   const sortedNum = Number(sortedDigits.join(''));
  
  //   Below is how to reverse the order of the numbers in the string so that the highest number possible will be the output
  const highestNum = Number(sortedDigits.reverse().join(''));
    
    return sortedNum;
  }
  console.log(descendingOrder(12345));