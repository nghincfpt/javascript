console.log("hello work");

let sum=(a,b,callback) =>{
  let tong = a+b;

  setTimeout(()=>{
    callback(tong);
  },5000)
  
}

let prinSum =(message) =>{
    console.log('check out sum ',message);
}
sum(4,5,prinSum);
