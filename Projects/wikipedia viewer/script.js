$(document).ready(function(){

    var str1, str2, str3, str4, str5;


    $("#button").on("click", function(){


        str1 = $("#searchBar");

        str1.focus();

        str2 = str1.val();


        $.getJSON("https://en.wikipedia.org/w/api.php?action=opensearch&search=" + str2 + "&format=json&callback=?", function(dat){ // $(".message").html([3][1]));

            for (i = 1; i < dat[1].length; i++) {


                str3 = dat[1][i];
                str4 = dat[2][i];
                str5 = dat[3][i];



                $(".message").append(str3 + ": "+ str4 + "<a href =  "+ str5 +" target = '_blank'> click here for more info </a>" );
                $(".message").append("<br> <br>");


            }

        });


        /*



         window.open("https://www.google.com/#q=" + str2, '_blank');


      */

    });


    $("#randomButton").on("click", function(){



        window.open("https://en.wikipedia.org/wiki/Special:Random", '_blank');

    });


});

