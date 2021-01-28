addTogether(5)(7);

function addTogether(arg1, arg2) {
  
    if(typeof arg1!="number"){
      console.log(undefined);
    }
    if(!arg2){
      return function(arg2){
        if(typeof arg2==="number"){
        console.log(arg1+arg2);
        }else{
          console.log(undefined);
        }
      }
    }
    if(typeof arg2==="number"){
    console.log(arg1+arg2);
    }else{
      console.log(undefined);
    }
  }
  
  
