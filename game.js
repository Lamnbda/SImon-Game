var buttonColors = ["red", "blue", "green", "yellow"];

var gamePattern = [];

function nextSequence() {

    var randomNumber = Math.floor(Math.random() * 4)
    var randomColorChosen = buttonColors[randomNumber];
    var colorAudio = new Audio("./sounds/" + randomColorChosen + ".mp3");
    $("#"+ randomColorChosen).fadeIn(60).fadeOut(60).fadeIn(60);
    colorAudio.play();
}

$(document).click(function(){
    nextSequence();
})




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