function titleCase(str) {

    var str1, str2, str3 = "";
    var ans;

    var arr1 = [], arr2 = [], arr3 = [];

    str = str.toLowerCase();

    arr1 = str.split(" ");

    for (var i = 0; i < arr1.length; i++) {

        str1 = arr1[i][0].toUpperCase();


        for (var j = 1; j < arr1[i].length; j++) {



             arr2.push(arr1[i][j]);

        }

        str2 = arr2.join("");

        arr2 = [];

        str3 = str1.concat(str2);

        arr3.push(str3);


    }

    ans = arr3.join(" ");



    return ans;

}

console.log(titleCase("I'm a little tea pot"));