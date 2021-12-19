//anonymous function
var a=[3,2,1,6,5,4,9,8,7];
var b=[];
var odd=function(a){
    for (let i=0;i<a.length;i++){
        if((a[i]%2)!==0)
        b.push(a[i]);
    }return b;
}
console.log(odd(a));

//IIFE
var a=[3,2,1,6,5,4,9,8,7];
var b=[];
(function(){
    for (let i=0; i<a.length;i++){
        if((a[i]%2)!==0)
        b.push(a[i]);
    }console.log(b);
})();

//Arrow Function
var a=[3,2,1,6,5,4,9,8,7];
var b=[];
var odd=()=>{
    for (let i=0; i<a.length;i++){
        if((a[i]%2)!==0)
        b.push(a[i]);
    }return b;
};
console.log(odd());
