
function steamrollArray(arr) {
    const stack = [...arr];
    const newarr = [];
    while(stack.length) {
      
      const next = stack.pop();
      if(Array.isArray(next)) {
        
        stack.push(...next);
      } else {
        newarr.push(next);
      }
    }
    
    console.log(newarr.reverse()); 
  }


steamrollArray([1, [2], [3, [[4]]]]);




