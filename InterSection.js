
diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
function diffArray(arr1, arr2) {
    var newArr = [];
    for(let i=0; i<arr2.length-1; i++){
        for(let j=0; j<=arr1.length-1; j++){
            if(arr1[i]===arr2[j]){
                break;
            }else{
                newArr.push(arr1[i])
            }
        }
        
    }
    console.log(newArr);
}
  
  