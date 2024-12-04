function pairElement(str) {
    var newarr = [];
    for(let i=0; i<str.length; i++){
       let temp=getPair(str.charAt(i));
        newarr.push(temp);
    }
    return newarr;
  }

  function getPair(letter){
    switch (letter) {
        case "G":
            return ["G", "C"];
            break;
        case "C":
            return ["C", "G"];
                break;
        case "A":
            return ["A", "T"];
                break;
        case "T":
            return ["T", "A"];
                break;
        default:
            break;
    }
   }
  
 pairElement("GCG");
 