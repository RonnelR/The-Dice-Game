// first players dice


var randomNumber1 = Math.floor(Math.random()*6)+1; 
var randomDiceNumber1 = ("dice"+randomNumber1+".png");
var randomImageSource1 = ("./assets/images/"+randomDiceNumber1);
var firstDice = document.querySelectorAll("img")[0];
 var first = firstDice.setAttribute("src",randomImageSource1);


//  second players dice


 var randomNumbers2 = Math.floor(Math.random()*6)+1;
 var randomDiceNumber2 = ("dice"+randomNumbers2+".png");
 var randomImageSource2 = ("./assets/images/"+randomDiceNumber2);
var secondDice = document.querySelectorAll("img")[1];
var second = secondDice.setAttribute("src",randomImageSource2);


// fixing heding accounding to the game result



if(randomNumber1 > randomNumbers2){

   document.querySelector("h1").textContent = "🚩Player1 wins!!";

}else if(randomNumbers2 > randomNumber1){
    document.querySelector("h1").textContent = "Player2 wins!!🚩";
}else{
    document.querySelector("h1").textContent = "🚩Draws!!🚩";
}