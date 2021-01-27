
translatePigLatin("rhythm");

function translatePigLatin(str) {
   const regex = /["a"|"e"|"i"|"o"|"u"]/i;
    let index = str.search(regex);
    if(index==0){
        var vowelstring = str.concat("way");
    }
    if(index>=1){
        temp=str.slice(0, index);
        var newstrng=str.slice(index, str.length)+temp+"ay";
        console.log(newstrng);
    }
    if(index==-1){
        newstrng=str.concat("ay");
        console.log(newstrng);
    }  
  }
  
  
