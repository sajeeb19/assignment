//**Question 3: Username Gatekeeper · 10 marks
// Write a function validateUsername that takes a username and checks it against these rules, in this order:
//Shorter than 4 characters → return "Too Short"
//Contains a space → return "No Space Allowed"
//Contains the word admin anywhere, in any letter case → return "Reserved Word"
//Otherwise → return "Available" */


function validateUsername(username){
  if(username.length < 4){
    return "Too Short";
  } else if(username.includes(" ")){
    return "No Space Allowed";
  } else if(username.toLowerCase().includes("admin")){
    return "Reserved Word";
  } else{
    return "Available";
  }
}
  console.log(validateUsername("adm1in"));