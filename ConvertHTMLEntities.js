function convertHTML(str) {
var regex = /&|<|>|"|'/g;
str = str.replace(regex, function(key){

    switch (key) {
        case "<":
            return "&lt;";
            break;
        case ">":
            return "&gt;";
            break;
        case "&":
            return "&amp;";
            break;
        case "'":
            return "&apos;";
            break;
        case '"':
            return "&quot;";
            break;
    
        default:
            break;
    }
});
console.log(str);
}

  
  convertHTML("Schindler's List");