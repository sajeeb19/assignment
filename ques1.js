//Write a function describeValue that takes any value and returns a string with two pieces of information joined by a space, a pipe, and another space:

//<type of the value> | <truthy or falsy

function describeValue(value){
 var typs = typeof value;
 if(value){
    return `${typs} | truthy`
 }else{
    return `${typs} | falsy`
 }
}

console.log(describeValue(0));
