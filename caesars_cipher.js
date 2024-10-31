function rot13(str) {
    const alpha = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    const newArray=[];
    //to capitalise the string
    const cleaned = str.toUpperCase().split('');
    //to loop through each letter
    cleaned.forEach(letr=>{
    if(alpha.indexOf(letr)<0){
      newArray.push(letr);
    }
    else if (alpha.indexOf(letr) >= 0) {
        const higher = alpha.indexOf(letr) + 13;
        if (higher > 25) {
          newArray.push(alpha[higher - 26]);
        }
        else if (higher <= 25) {
          newArray.push(alpha[higher]);
        }
      }
    });
  console.log(newArray.join(''));
  return newArray.join('');
  
  }
  
  rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT.");