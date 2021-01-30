function truthCheck(collection, pre) {
    // console.log(NaN==NaN);
    var flag = true;
    for(let i=0; i<collection.length; i++){
        
        if(collection[i].hasOwnProperty(pre)){
        var prvl = collection[i][pre];
        
        if(prvl==null){
            flag=false;
        }
        if(prvl==0){
            flag=false;
        }
        if(prvl==undefined){
            flag=false;
        }
        if(prvl==""){
            flag=false;
        }
        if(Number.isNaN(prvl)){
            flag=false;
        }
        if(prvl==false){
            flag=false;
        }
    }else{
        flag=false;
    }
    }
    console.log(flag);  
  }
  
  truthCheck([{"single": "double"}, {"single": NaN}], "single");