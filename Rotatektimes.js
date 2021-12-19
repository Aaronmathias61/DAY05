// AnonmyousFunction

var a=[2,3,4,5,6,7,8,9];
const k = function(a, k) {
  for (let i = 0; i < k; i++) {
      a.unshift(a.pop());
  }
  return a;
};
console.log(k(a,3));

// IIFE
var a=[2,3,4,5,6,7,8,9];
(function(a, k) {
  for (let i = 0; i < k; i++) {
      a.unshift(a.pop());
  }
  console.log(a);
})(a,3);
