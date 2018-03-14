function largestOfFour(arr) {

    var arr1 = [];
    var num1;

    for (var i = 0; i < arr.length; i++) {


        num1 = 0;


        for (var j = 0; j < arr[i].length; j++) {


            if (arr[i][j] > num1) {

                num1 = arr[i][j];

            }

            else {

            }

        }

        arr1.push(num1);

    }

    return arr1;

}

console.log(largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]));

/*

        alternate solution



        var arr1 = [];

        for (var i = 0; i < arr.length; i++) {


            var max = arr[i].reduce(function(a, b){

                return Math.max(a, b);

            });


            arr1.push(max);



        }


        return arr1;
 */