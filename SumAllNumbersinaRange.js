
let arr = [10, 5];
sumAll(arr);
function sumAll(arr) {
    let sum = 0;
    let abc= arr.length;
    if(arr[0]>arr[abc-1]){
        for(let i=arr[0]; i>=arr[abc-1]; i--){
            sum = sum+i;
            }
    }else{
        for(let i = arr[0]; i<=arr[abc-1]; i++){
            sum= sum+i;
        }
    }
    console.log(sum);
}
