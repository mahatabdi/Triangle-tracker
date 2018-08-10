var length = parseInt(prompt("enter a length in centimeters"));
var width = parseInt(prompt("enter a width in centimeters"));
var height = parseInt(prompt("enter a height in centimeters"));
if(length===width && length===height && width===height){
  alert("This is an equilateral triangle!")
};
else if(length===width && width===height && length!==height || length!== width){
  alert("This is an isosceles triangle!")
};
else if(length!== width && width!== height && height!==length){
  alert("This is a scalene triangle!")
};
else(isNaN){
  alert("Please enter a number!")
};
