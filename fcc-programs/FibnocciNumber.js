function sumFibs(num) {
    var a = 1,
        b = 1,
        c;
    var sum = 2;
    for (let i = 0; i < 30; i++) {
        c = a + b;
        a = b;
        b = c
        console.log(c);
        if (c <= num & c % 2 != 0) {
            sum = sum + c;
        }
        if (c > num) {
            break;
        }
    }
    console.log("The sum is " + sum);
}

sumFibs(4000000);