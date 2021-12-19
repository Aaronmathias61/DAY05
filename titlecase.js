//Anonymous function

var a="hi., how are you?";
var b=function title(str) {
  return str.toLowerCase().split(' ').map(function (word) 
  {
      return (word.charAt(0).toUpperCase() + word.slice(1));}).join(' ');
    
};
console.log(b(a));

//Arrow Function
var a="hi., how old are you?";
var b=(str)=> {
  return str.toLowerCase().split(' ').map(function (word) 
  {
      return (word.charAt(0).toUpperCase() + word.slice(1));}).join(' ');
    
};
console.log(b(a));