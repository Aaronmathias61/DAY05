// Anonymous Function
var a=[6,5,4,9,8,7,3,2,1];
let total=0;
var sum=function(a){
for(let i=0;i<a.length;i++)
{total+=a[i];}
console.log(total);};
sum(a);
//IIFE
var a=[6,5,4,9,8,7,3,2,1];
let tot=0;
(function(){
for(let i=0;i<a.length;i++)
{tot+=a[i];}
console.log(tot);
})(a);
//Arrow function
var a=[3,2,1,6,5,4,9,8,7];
var tota=0;
var sum=()=>{
    for (let i=0; i<a.length;i++){
        tota+=a[i];
    }return tota;
};
console.log(sum());