//jshint esversion:6
//console.log(module);
//module.exports="hello world";
//module.exports=getDate();  hear ew get date otherwise add peranthesis in app.js
//module.exports=getDate;
module.exports.getDate=getDate;



function getDate(){

  const today=new Date();

  const  options={      //let
    weekday:"long",
    day:"numeric",
    month:"long"
  };
  let day=today.toLocaleDateString("en-US",options);

  return day;
}
/*
module.exports.getDate= function(){

  let today=new Date();

  let  options={
    weekday:"long",
    day:"numeric",
    month:"long"
  };
  let day=today.toLocaleDateString("en-US",options);

  return day;
}
*/
module.exports.getDay=getDay;

function getDay(){

  let today=new Date();

  let  options={
    weekday:"long",

  };
  let day=today.toLocaleDateString("en-US",options);

  return day;
}

console.log(module.exports);
