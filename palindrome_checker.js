function palindrome(str) {
    let result=false
    const cleaned=str.toLowerCase().replace(/[^a-z0-9]/g, "");
    const reversed=cleaned.split("").reverse().join("");
    if(cleaned===reversed){
    result=true;
    }
    console.log(result);
    return result
    }
    
    palindrome("not a palindrome");