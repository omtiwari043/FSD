const num=[10,4,9,16,81,36,2,0];
const even=num.filter((i)=>(i%2==0));
const sqr=even.map((i)=>(i*i));
const sum=sqr.reduce((i,s)=>(i+s));
console.log(sum)