let buttons = document.querySelectorAll(".drum")
buttons.forEach(button => {
    button.addEventListener("click", function() {

        playSound(this.innerHTML);
        buttonAnimation(this.innerHTML);
    });
});



document.addEventListener("keydown", function(event) {

    playSound(event.key);
    buttonAnimation(event.key);
});


// function that will play sound for respective key pressed
function playSound(key) {
    var sound;
    switch (key) {
        case 'w':
            sound = new Audio("sounds/crash.mp3");
            break;
        case 'a':
            sound = new Audio("sounds/kick-bass.mp3");
            break;
        case 's':
            sound = new Audio("sounds/snare.mp3");
            break;
        case 'd':
            sound = new Audio("sounds/tom-1.mp3");
            break;
        case 'j':
            sound = new Audio("sounds/tom-2.mp3");
            break;
        case 'k':
            sound = new Audio("sounds/tom-3.mp3");
            break;
        case 'l':
            sound = new Audio("sounds/tom-4.mp3");
            break;
                
        default:
            break;
    }
    if (sound)
        sound.play();
}


function buttonAnimation(keyPressed) {
    var activeButton = document.querySelector("." + keyPressed);
    activeButton.classList.add("pressed");

    setTimeout(function () {
        activeButton.classList.remove("pressed");
    }, 100);
}