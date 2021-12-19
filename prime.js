//Anonmyous function
var a = [5, 9, 63, 29, 35, 6, 55, 23];
var b = [];
var prime=function(item) {
    var num = item / 2;
      for (var j = 2; j <= num; j++) {
       if ((item % j) === 0) {
        return false;
       }}return true;};
for (var i = 0; i < a.length; i++) {
  if (prime(a[i])) {
      b.push(a[i]);
  }}console.log(b);

  //Arrow Function
var a = [5, 9, 63, 29, 35, 6, 55, 23,7];
var b = [];
var prime=(item)=> {
    var num=item/2;
      for (var j = 2; j <= num; j++) {
       if ((item % j) === 0) {
        return false;
       }}return true;};
for (var i = 0; i < a.length; i++) {
  if (prime(a[i])) {
      b.push(a[i]);
  }}console.log(b);