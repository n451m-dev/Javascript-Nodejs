
rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT.");

function rot13(str) {
    var aftershiftstr=[];
    for(let i=0; i<str.length; i++){
        let character=str.charCodeAt(i)
        if(!(65<=character&&character<=90)){
            aftershiftstr.push( String.fromCharCode(character));
        }else{
        let shift = String.fromCharCode(character%26+65);
        aftershiftstr.push(shift);
        }
    }
    console.log(aftershiftstr.join(""));
}