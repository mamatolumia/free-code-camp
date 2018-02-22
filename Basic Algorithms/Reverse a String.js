function reverseString(str) {

    var arr1;
    arr1 = str.split("");
    arr1 = arr1.reverse();
    str = arr1.join("");

    return str;
}

console.log(reverseString("yes"));