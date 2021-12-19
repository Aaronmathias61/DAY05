  //Anonmyous Function
  const arr = ['mom', 'dad', 'abcde', 'racecar', 'momom'];
  function namePalindrome(arr) {
    return arr.filter((curr, idx, arr) => {
      const splitArr = curr.split('');
      const reversedString = splitArr.reduceRight((prev, curr) => ( prev + curr ), '');
      if (curr === reversedString) return curr;
    });
  }
  console.log(namePalindrome(arr));

  //IIFE
  const arr = ['mom', 'dad', 'abcde', 'racecar', 'momom'];
  let a=[];
  (function(){
    return arr.filter((curr, idx, arr) => {
      const splitArr = curr.split('');
      const reversedString = splitArr.reduceRight((prev, curr) => ( prev + curr ), '');
      if (curr === reversedString)
      a.push(curr);
      return a;
    });
  }
  )(arr);
  console.log(a);

//Arrow Function
const arr = ['mom', 'dad', 'abcde', 'racecar', 'momom'];
var palin=()=> {
    return arr.filter((curr, idx, arr) => {
      const splitArr = curr.split('');
      const reversedString = splitArr.reduceRight((prev, curr) => ( prev + curr ), '');
      if (curr === reversedString) return curr;
});
};
console.log(palin(arr));