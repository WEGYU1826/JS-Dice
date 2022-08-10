var randomImageNumber1 = Math.floor(Math.random()*6)+1;
var randomDiceImageURL1 = "images/dice" + randomImageNumber1 + ".png";

document.querySelectorAll("img")[0].setAttribute("src",randomDiceImageURL1);

var randomImageNumber2 = Math.floor(Math.random()*6)+1;
var randomDiceImageURL2 = "images/dice" + randomImageNumber2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src",randomDiceImageURL2);

if(randomImageNumber1 > randomImageNumber2){
    document.querySelector("h1").innerHTML = "🚩 Player 1 Win"
}

else if(randomImageNumber1 < randomImageNumber2){
    document.querySelector("h1").innerHTML = "Player 2 Win 🚩"
}

else{
    document.querySelector("h1").innerHTML = "Draw!"
}