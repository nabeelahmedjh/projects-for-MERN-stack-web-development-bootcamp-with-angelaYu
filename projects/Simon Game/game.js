let buttonColors = ["red", "blue", "green", "yellow"];
var gamePattern = [];
let userClickedPattern = [];
var level = 0;
var gameEnded = true;


    $("body").on("keypress", function() {
        if (gameEnded)
            nextSequence();
        
    })



$(".btn").on("click", function (event) {
    userChosenColor = event.target.id;
    userClickedPattern.push(userChosenColor);
    playSound(userChosenColor);
    animatePress(userChosenColor);
    console.log(userClickedPattern);
    checkAnswer(userClickedPattern.length - 1);
    
});



function nextSequence () {
    gameEnded = false;
    randomNumber = Math.round(Math.random() * 3) ;
    
    level += 1;
    $("h1").text("Level: " + level)
    let randomChosenColor = buttonColors[randomNumber];
    gamePattern.push(randomChosenColor);

    $("#" + randomChosenColor).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
    playSound(randomChosenColor);

    
    
    

}


function playSound(name) {
    var audio = new Audio("sounds/" + name + ".mp3");
    audio.play();
}

function animatePress(currentColor) {
    $("#" + currentColor).addClass("pressed");
        setTimeout(function () {
            $("#" + currentColor).removeClass("pressed")
        }, 100);

}

function checkAnswer(currentLevel) {

    if (userClickedPattern[currentLevel] === gamePattern[currentLevel]) {
        console.log("Success");

        if (currentLevel + 1 == gamePattern.length) {
            userClickedPattern = [];
            setTimeout(nextSequence, 1000);

        }
    } else {
        console.log("wrong");
        gameOver();
        startOver();

    }

}


function gameOver() {
    var audio = new Audio("sounds/wrong.mp3");
    audio.play();
    $("body").addClass("game-over");

    setTimeout(function() {
        $("body").removeClass("game-over");
    }, 200)
    gameEnded = true;
    $("h1").text("Game Over, Press Any Key to Restart");

}

function startOver() {
    gamePattern = [];
    userClickedPattern = [];
    level = 0;
    
}