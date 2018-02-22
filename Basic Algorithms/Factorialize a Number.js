function factorialize(num) {


    if (num === 0) {

        num = 1;
    }


    else {

        for (var i = num; i > 2; i--) {

            num = num * (i - 1);

        }


    }


    return num;


}

console.log(factorialize(4));