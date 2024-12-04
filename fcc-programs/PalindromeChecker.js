
  palindrome("Aba");

function palindrome(str) {
    var flag=true;
    var newstr = str.replace(/[^a-zA-Z1-9]/gi, "").toLowerCase();
    for(let i=0; i<=newstr.length/2; i++){
        if(!(newstr[i]===newstr[newstr.length-1-i])){
            flag=false;
        }
    }
   if(flag){console.log("palindrome");}else{console.log("not plalindrome");}
  
    return flag;
  }
