var card1Short;
var card1Long;
var card2Short;
var card2Long;
var card3Short;
var card3Long;


function init() {
    card1Short = "";
    card1Long = "";
    card2Short = "";
    card2Long = "";
    card3Short = "";
    card3Long = "";
    card1Long = document.getElementById("TextDesc1").innerText;
    card2Long = document.getElementById("TextDesc2").innerText;
    card3Long = document.getElementById("TextDesc3").innerText;
}
function mouseIn(i) {
    if (i == 1) {
        for (var i = 0; i < 100; i++) {
            card1Short += card1Long[i];
        }
        card1Short += "...";
        document.getElementById("TextDesc1").innerText = card1Long;
        document.getElementById("TextDesc1").style.top = "8px";
    }
    else if (i == 2) {
        for (var i = 0; i < 100; i++) {
            card2Short += card2Long[i];
        }
        card2Short += "...";
        document.getElementById("TextDesc2").innerText = card2Long;
        document.getElementById("TextDesc2").style.top = "8px";
    }
    else if (i == 3) {
        for (var i = 0; i < 100; i++) {
            card3Short += card3Long[i];
        }
        card3Short += "...";
        document.getElementById("TextDesc3").innerText = card3Long;
        document.getElementById("TextDesc3").style.top = "8px";
    }
}
function mouseOut(i) {
    if (i == 1) {
        document.getElementById("TextDesc1").innerText = card1Short;
        document.getElementById("TextDesc1").style.bottom = "0px";
        document.getElementById("TextDesc1").style.top = "410px";
    }
    else if (i == 2) {
        document.getElementById("TextDesc2").innerText = card2Short;
        document.getElementById("TextDesc2").style.bottom = "0px";
        document.getElementById("TextDesc2").style.top = "410px";
    }
    else if (i == 3) {
        document.getElementById("TextDesc3").innerText = card3Short;
        document.getElementById("TextDesc3").style.bottom = "0px";
        document.getElementById("TextDesc3").style.top = "410px";
    }
}
var position = $(window).scrollTop();
  
        $(window).scroll(function() {
            var scroll = $(window).scrollTop();
            if (scroll > position) {
                console.log('scrollDown');
                $('.scrollBar').fadeIn();
            } else {
                console.log('scrollUp');
                $('.scrollBar').fadeOut();
            }
            position = scroll;
        });