function getGcd(a, b){
  let t=0;
while(b!=0){
    t=b;
    b=a%b;
    a=t;
}
return a;
}
function getLcm(a, b){
    let lcm=0;
    lcm= a*b/getGcd(a, b);
    return lcm;
}
function smallestCommons(arr) {
    var newArr=[];
    if (arr[0]<arr[1]) {
    for(let i=arr[0]; i<=arr[1]; i++){
        newArr.push(i);
        }
    }else{
        for(let j=arr[1]; j<=arr[0]; j++){
            newArr.push(j)
    }
    }
    var mlcm = 1;
    for(let j=0; j<newArr.length; j++){

        mlcm = getLcm(mlcm, newArr[j]);
    }
    console.log(mlcm);

  }

  smallestCommons([23, 18]);
