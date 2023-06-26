
/* $(document).ready(function(){
    $("h1").css("color","red");
}); */
//$("h1").css("color","green");
//console.log($("h1").css("color"));  //it gives output in console
//console.log($("h1").css("font-size"));
//$("h1").css("font-size","5rem");
//$("h1").addClass("big-title  margin-50");
//$("button").text("dont");
//$("button").html("<em>hey</em>");
//$("button").text("<em>hey</em>");
//console.log($("img").attr("src"));  //output as img file not avialble
//$("a").attr("href","https://www.Yahoo.com");
/*
$("h1").click(function(){
  $("h1").css("color","purple");
});
*/
/*   //using javascript
for(var i=0;i<5;i++){
  document.querySelectorAll("button")[i].addEventListener("click",function(){
    document.querySelector("h1").style.color="purple";
  });
}
*/
//using jQuery
/*
$("button").click(function(event){
  console.log(event.key);
});
*/

/* //select only input tag
$("input").keydown(function(event) {
  console.log(event.key);
});
*/
/*  //selects entire document
$(document).keydown(function(event) {
  console.log(event.key);
});
*/
/*$(document).keydown(function(event){
  $("h1").text(event.key);
});
*/
/*$(document).click(function(event){
  $("h1").text(event.key);
});
*/
/*
$("h1").on("mouseover",function(){
  $("h1").css("color","purple");
})
*/
/*
$("h1").on("click",function(){
  $("h1").css("color","purple");
})
*/
/*
$("button").on("click",function(){
  $("h1").hide();
});
*/
/*
$("button").on("click",function(){
  $("h1").toggle();   //1st click hide,2nd click visible
});
*/
/*$("button").on("click",function(){
  $("h1").fadeOut();
});
*/
/*$("button").on("click",function(){
  $("h1").fadeToggle();
});
*/
/*
$("button").on("click",function(){
  $("h1").slideUp();
});
*/
/*inside console
$("button").on("click",function(){
  $("h1").slidedown();
});
*/
/*()$("button").on("click",function(){
  $("h1").slideToggle();
});
*/

/*
$("button").on("click",function(){
  $("h1").animate({opacity:0.5});
});
*/
/*
$("button").on("click",function(){
  $("h1").animate({color:red});
});
*/

/*$("button").on("click",function(){
  $("h1").animate({margin:20});
});
*/
/*
$("button").on("click",function(){
  $("h1").animate({margin:"20%"});
});
*/
$("button").on("click",function(){
  $("h1").slideUp().slideDown().animate({opacity:0.5});
});
