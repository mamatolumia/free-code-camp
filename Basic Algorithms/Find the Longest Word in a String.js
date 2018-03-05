function findLongestWord(str) {

    var arr1 = [];
    var strLength = "";

    arr1 = str.split(" ");

    for (var i = 0; i < arr1.length; i++) {


        if (strLength < arr1[i].length) {

            strLength = arr1[i].length;


        }

        else {



        }

    }

    return strLength;
}

console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));