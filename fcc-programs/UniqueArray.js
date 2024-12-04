function uniteUnique(...args) {
  var newArr1=[];
  var newArr2=[];
    for(let i=0; i<=args.length-1; i++){
        newArr1 =newArr1.concat(args[i]);
    }
    for(let i=0; i<=newArr1.length-1; i++){
     
      if(newArr2.includes(newArr1[i])){
          
      }else{
        newArr2.push(newArr1[i]);
      }
    }
    console.log(newArr2);
  }
  
  uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);