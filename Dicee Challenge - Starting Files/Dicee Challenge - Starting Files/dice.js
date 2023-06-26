var randomnum1=Math.floor((Math.random()*6)+1);//1-6
var randomimg="dice"+randomnum1+".png"; //dice1.png-dice6.png
var randomimgsource="images/"+randomimg;//images/dice1.png-dice6.png
var image1=document.querySelectorAll("img")[0];
image1.setAttribute("src", randomimgsource);


var randomnum2=Math.floor((Math.random()*6)+1);
var randomimgsource2="images/dice"+randomnum2+".png";
var image2=document.querySelectorAll("img")[1];
image2.setAttribute("src", randomimgsource2);

if(randomnum1>randomnum2){
  document.querySelector("h1").innerHTML="🚩player 1 wins!";  //copy the emoji from google
}
else if(randomnum1<randomnum2){
  document.querySelector("h1").innerHTML="player 2 wins!🚩";
}
else{
  document.querySelector("h1").innerHTML="Draw!";
}
