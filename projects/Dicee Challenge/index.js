

var randomNumber1 = Math.floor((Math.random() * 6) + 1);
var randomNumber2 = Math.floor((Math.random() * 6) + 1);


// adding random dice image respective to the random number generated
document.querySelector(".img1").setAttribute("src", `images/dice${randomNumber1}.png`);
document.querySelector(".img2").setAttribute("src", `images/dice${randomNumber2}.png`);


var heading = document.querySelector(".result");
if (randomNumber1 > randomNumber2) {
    heading.innerHTML = "Player 1 Won 🚩";
} else if (randomNumber1 < randomNumber2) {
    heading.innerHTML = "🚩Player 2 Won";
} else {
    heading.innerHTML = "Draw :("
}