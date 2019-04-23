var buttonColors = ["red", "blue", "green", "yellow"];
var userClickedPattern = [];
var gamePattern = [];

var isCorrect = false;
var gameStarted = false;

var level = 0;

function nextSequence() {

    var randomNumber = Math.floor(Math.random() * 4)
    var randomColorChosen = buttonColors[randomNumber];
    $("#" + randomColorChosen).fadeIn(60).fadeOut(60).fadeIn(60);
    gamePattern.push(randomColorChosen);
    level++;
    playSound(randomColorChosen);
    $("h1").text("Level " + level);
}


$(document).keydown(function () {
    if (gameStarted === false) {
        nextSequence();
        gameStarted = true;
    } else {

    }

})


function checkAnswer(currentLevel) {
    for (var i = 0; i < userClickedPattern.length; i++) {
        if (userClickedPattern[i] === gamePattern[i]) {
            isCorrect = true;
            console.log("success");
            if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {

                if (gamePattern.length === userClickedPattern.length) {
                    setTimeout(function () {
                        nextSequence();
                    }, 1000)
                    userClickedPattern = [];
                }
            }
        } else {
            $("h1").text("wrong!");
            $("body").addClass("game-over")
            setTimeout(function () {
                $("body").removeClass("game-over");
            }, 200);

        }
    }

}

$(".btn").click(function (e) {
    var userChosenColor = $(this).attr("id")
    userClickedPattern.push(userChosenColor);
    playSound(userChosenColor);
    animatePress($(this));
    checkAnswer(userClickedPattern.length - 1);
})


function playSound(name) {
    var colorAudio = new Audio("./sounds/" + name + ".mp3");
    colorAudio.play();
}

function restartGame(){
    
        gamePattern=[];
        userClickedPattern=[];
        level=0;
    

}

function animatePress(currentColor) {
    $(currentColor).addClass("pressed");
    setTimeout(function () {
        $(currentColor).removeClass("pressed")
    }, 100);

}
// function nextSequence() {
//     var randomNumber = Math.floor((Math.random() * 4));
//     return randomNumber;
// }

// var buttonColors = ["red", "blue", "green", "yellow"];

// var gamePattern = [];




// var randomChosenColor = buttonColors[nextSequence()];


// gamePattern.push(randomChosenColor);
// colorAudio(randomChosenColor);

// function colorAudio(color) {
//     switch (color) {
//         case "red":
//             var redSound = new Audio("./sounds/red.mp3");
//             redSound.play();
//             break;

//         case "blue":
//             var blueSound = new Audio("./sounds/blue.mp3");
//             blueSound.play();
//             break;
//         case "yellow":
//             var yellowSound = new Audio("./sounds/yellow.mp3");
//             yellowSound.play();
//             break;
//         case "green":
//             var greenSound = new Audio("./sounds/green.mp3");
//             greenSound.play();
//             break;        
//     }
// }

// $("#" + randomChosenColor).fadeOut(60).fadeIn(60);