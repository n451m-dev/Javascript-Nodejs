function getnumber(num){
    var flag;
    for (let i= 2; i<=num/2; i++){
        if (num%i==0) {
            flag=true;
        }
    }
    if(flag){
        return false;
    }else{
        return true;
    }

}
function sumPrimes(num) {
    
var sum=0;
  for(let j=2; j<=num; j++){
      if(getnumber(j)){
        sum=sum+j;
      }
  }
       console.log(sum);
   }
  
  
  sumPrimes(977);