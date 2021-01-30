diffArray([1, 2, 3, 5,], [4,5,6]);

// this functio will return the intersection values of two arrays in an array
function diffArray(arr1, arr2) {
    var newArr = [];
    intersection(arr1, arr2);
    intersection(arr2, arr1);
    function intersection(arr1, arr2){
    
    for(let i= 0; i<=arr1.length-1; i++){
       
        if(arr2.find(element => element===arr1[i])){
            
        }
        else{
            newArr.push(arr1[i])
        }
    }
  }
  console.log(newArr);
}
  