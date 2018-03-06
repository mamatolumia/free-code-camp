var str1 = "";
var str2 = "";
var val1 = 0;
var arr1 = ["Give me liberty, or give me death! - Patrick Henry", "These are the times that try men's souls. - Thomas Paine", "Our virtues and our failings are inseparable, like force and matter. When they separate, man is no more. - Nikola Tesla", "Imagination is more important than knowledge. Knowledge is limited. Imagination encircles the world. - Albert Einstein", "The ultimate measure of a man is not where he stands in moments of comfort and convenience, but where he stands at times of challenge and controversy. - Martin Luther King Jr."];

$(document).ready(function() {


    $("#getMessage").on("click", function(){


        val1 = Math.floor(Math.random() * (4 - 0 + 1)) + 0;


        str1 = arr1[val1];


        $(".message").html(str1);


    });


    $("#tweet_quote").on("click", function(){


        var str2 = $(".message").text();


        if (str2 === "") {


            $(".message").html("Please press the Random quote button");


        }

        else if (str2 === "Please press the Random quote button") {


        }

        else {

            window.open('https://twitter.com/home?status=' + encodeURIComponent(str2), '_blank');

        }

    });});

