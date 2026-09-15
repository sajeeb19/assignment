//**Question 2: Bangladesh Weekend Machine · 10 marks 
// Write a function getDayType that takes a day name and returns:*/

function getDayType(dayName){
  var day = dayName.toLowerCase();
  if(day === "saturday" || day === "friday"){
    return "weekend";
  } else if (day === "monday" || day === "tuesday" || day === "wednesday" || day === "thursday" || day === "sunday"){ 
    return "weekday";
  }else{
    return "invalid day";
  }
}

console.log(getDayType("Saturday"));
