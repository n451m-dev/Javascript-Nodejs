
rot13("SERR YBIR 10");

function rot13(str) {
    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var aftershiftstr=[];

    for(let i=0; i<str.length; i++){
        let searcher=str[i];
        let index=alphabet.search(searcher);
        if(index===-1){
            aftershiftstr.push(searcher);
        }else{
        let shift = index+13;
        if(shift>25){
            shift = shift-26;
        }
        aftershift = alphabet[shift];
        aftershiftstr.push(aftershift)
    }
    }
    console.log(aftershiftstr.join(""));
  }
  
  