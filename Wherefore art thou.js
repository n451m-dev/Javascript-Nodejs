
whatIsInAName([{ "apple": 1 }, { "apple": 1 }, { "apple": 1, "bat": 2 }], { "apple": 1 });

function whatIsInAName(collection, source) {
  var arr=[];
  var srcKeys = Object.keys(source);
  collection.filter(function(clobj){
    for(let i=0; i<srcKeys.length; i++){
      if(clobj[srcKeys[i]]===source[srcKeys[i]]){
        arr.push(clobj);
      }
    }
   
  });
console.log(arr);
return arr;
}