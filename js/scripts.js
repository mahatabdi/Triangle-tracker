function determine(){

var length=parseFloat(prompt"Enter length");
var width=parseFloat(prompt"Enter width");
var height=parseFloat(prompt"Enter height");

if(length===width && length===height && width===height){
  alert("It is an equilateral triangle");
}

else if(length===width || length===height || width===height){
  alert("It is an isosceles triangle");
}

else if((length+width)<=height || length+height<=width || width+height<=length){
  alert("It is not a triangle");
}
else(){
  alert("Not a triangle")
}
 }
deteremine();
