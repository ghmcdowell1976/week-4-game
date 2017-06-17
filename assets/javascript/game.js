$(document).ready(function() {
    var x = redRuby;
    var y = blueDiamond;
    var a = yellowTopaz;
    var b = greenEmerald;
    var wins;
    var losses;
    var yourScore = 0;
    var sum = 0;

    $("#yourScore").html(sum);

    $("#winCounter").html(wins);
    $("#loseCounter").html(losses);

    var randNum = Math.floor(Math.random() * 101) + 19;
    $("#randomNumber").html(randNum);
    console.log(randNum);

    var redRuby = Math.floor(Math.random() * 12) + 1;
    
    var blueDiamond = Math.floor(Math.random() * 12) + 1;
    y = blueDiamond;
    

    var yellowTopaz = Math.floor(Math.random() * 12) + 1;
    a = yellowTopaz;
    

    var greenEmerald = Math.floor(Math.random() * 12) + 1;
    b = greenEmerald;
    

// function compute(click) {
//     for (var i = 0; i < numbers.length; i++)
//         total = number[i] + yourScore;
// }

$("#buttonRed").on('click', function() {
    sum = sum + redRuby;
    console.log(sum);
    $("#yourScore").html(sum);
    if (sum === randNum){
    $("#gameStatus").html("YOU WIN");
    wins++;
     $("#winCounter").html(wins);
    }else if (sum > randNum){
    $("#gameStatus").html("BETTER LUCK NEXT TIME");
    losses++;
    $("loseCounter").html(losses);
}
});

$("#buttonBlue").click(function() {
    sum = sum + blueDiamond;
    console.log(sum);
    $("#yourScore").html(sum);
    if (sum === randNum){
    $("#gameStatus").html("YOU WIN");
    wins++;
    $("#winCounter").html(wins);
    } else if (sum > randNum){
    $("#gameStatus").html("BETTER LUCK NEXT TIME");
    losses++;
    $("loseCounter").html(losses);

}
});

$('#buttonYellow').on('click', function(){
    sum = sum + yellowTopaz;
    console.log(sum);
    $("#yourScore").html(sum);
    if (sum === randNum){
    $("#gameStatus").html("YOU WIN");
    wins++;
     $("#winCounter").html(wins);
}else if (sum > randNum){
    $("#gameStatus").html("BETTER LUCK NEXT TIME");
    losses++;
    $("loseCounter").html(losses);
}
});

$("#buttonGreen").click(function(){
    sum = sum + greenEmerald;
    console.log(sum);
    $("#yourScore").html(sum);
    if (sum === randNum){
    $("#gameStatus").html("YOU WIN");
    wins++;
     $("#winCounter").html(wins);
    }else if (sum > randNum){
    $("#gameStatus").html("BETTER LUCK NEXT TIME");
    losses++;
    $("loseCounter").html(losses);
}
})
});




