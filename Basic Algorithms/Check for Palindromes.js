function palindrome(str) {

    var re = /[_\-\u0020,/():.]/g;
    var arr1 = [], arr2 = [];

    str = str.replace(re, "");
    str = str.toLowerCase();

    arr1 = str.split("");
    arr2 = arr1.slice();

    arr2.reverse();
    var ans;

    for (var i = 0; i < arr1.length; i++) {

        if (arr1[i] === arr2[i]) {

        }

        else {


            ans = false;

            break;

        }

            ans = true;

    }


    return arr1;

}

console.log(palindrome("0_0 (: /-\ :) 0-0"));