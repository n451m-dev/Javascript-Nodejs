function dropElements(arr, func) {
   var iteration = arr.length;
   for(let i=0; i<iteration; i++){
      if(func(arr[0])){
        
      }else{
         arr.shift();
      }
   }
   console.log(arr);
  }
  
  dropElements([1, 2, 3,], function(n) {return n < 3; });