
$(document).ready(function() {
    
const laurieList = ["when you smile using your REAL smile.", 
"your ability to talk to anyone no matter where we are.", 
"the way you care about your friends and family wholeheartedly.", 
"when you call me 'Gloria' because I don't like it.", 
"when you come home to give me a break from the parental unit.", 
"your everlasting passion for transportation.", 
"your desire to travel and experience the world!"],

momList = ["your big heart of gold & love for others.", 
"that you're hardworking and a go-getter.", 
"your confidence in yourself and that you push yourself to excel and succeed.", 
"your love for our family and desire to spend time with us.", 
"that you're mom's baby & spoil me!",
"your positive attitude.",
"that you're just like me!"],

dadList = ["your determination and focus!",
"that you love to dress up. You never have enough shoes or sweaters.",
"your ability to build and use your network efficiently.",
"your Chinese eyes when you smile.",
"that you are active and take care of your physical health.",
"that you're a good communicator and love to talk.",
"that you're a great listener and enjoy being with your friends."];

let m = 0,
    l = 0,
    d = 0;

$('#mom').click(function(){
    if(m < momList.length) {
        $('#momLoves').empty();
        $('#momLoves').text(momList[m++]);
    }
});

$('#laurie').click(function(){
    if(l < laurieList.length) {
        $('#laurieLoves').empty();
        $('#laurieLoves').text(laurieList[l++]);
    }
});

$('#dad').click(function(){
    if(d < dadList.length) {
        $('#dadLoves').empty();
        $('#dadLoves').text(dadList[d++]);
    }
});

});