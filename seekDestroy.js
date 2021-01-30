destroyer(["possum", "trollo", 12, "safari", "hotdog", 92, 65, "grandma", "bugati", "trojan", "yacht"], "yacht", "possum", "trollo", "safari", "hotdog", "grandma", "bugati", "trojan");

/*Remove all elements from the initial array that are of the same
 value as these arguments*/
function destroyer(arr1,...args) {

    var newArr = [];
    for(let i= 0; i<=arr1.length-1; i++){   
        if(args.find(element => element==arr1[i])){    
        }
        else{
            newArr.push(arr1[i])
        }
    }
  console.log(newArr);
}
  