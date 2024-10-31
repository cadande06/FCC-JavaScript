function telephoneCheck(str) {
    const regex1=/^1{0,1}\s{0,1}[0-9]{3}\-[0-9]{3}\-[0-9]{4}$/g;
    const regex2=/^1{0,1}\([0-9]{3}\)[0-9]{3}\-[0-9]{4}$/g;
    const regex3=/^1{0,1}\s{0,1}\([0-9]{3}\)\s[0-9]{3}\-[0-9]{4}$/g;
    const regex4=/^1{0,1}\s{0,1}[0-9]{3}\s[0-9]{3}\s[0-9]{4}$/g;
    const regex5=/^[0-9]{10}$/g;
    
    if(regex1.test(str)===true){
      
      return true;
    }
  else if(regex2.test(str)===true){
    
      return true;
  }
  else if(regex3.test(str)===true){
    
      return true;
  }
  else if(regex4.test(str)===true){
    
      return true;
  }
  else if(regex5.test(str)===true){
    
      return true;
  }
  else{
      return false;
    }
  
  
  
    
  }
  
  telephoneCheck("(6054756961)");
  