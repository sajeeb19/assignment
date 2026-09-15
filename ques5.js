//**Question 5: Run Chase Commentator · 15 marks
//Write an arrow function getChaseVerdict(target, scored, ballsLeft) for a cricket run chase. to 0, so getCngFare(5) must work on its own. 
// */


function getChaseVerdict(target, scored, ballsLeft){
 let runsNeeded = target - scored;
 let requiredRate  = (runsNeeded / ballsLeft) * 6;
 console.log(`Runs Needed: ${runsNeeded}, Required Rate: ${requiredRate.toFixed(2)}`);
 if(runsNeeded <= 0){
   return "Won";
 } else if (runsNeeded > 0 && ballsLeft <=0){
   return "Lost";
 } else if (runsNeeded > 0 && ballsLeft > 0 && requiredRate <= 6){
   return "Comfortable";
 }else if (runsNeeded > 0 && ballsLeft > 0 && requiredRate > 6 && requiredRate <= 12 ){
   return "Tough";
 }else{
   return "Almost Impossible";
 }
}

console.log(getChaseVerdict(250, 240, 6));