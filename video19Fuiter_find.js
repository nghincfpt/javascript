console.log('helle filter and find')

// let arr = [1,2,3,4,5,6,7,8,9,10]
// //filter, find

// let filter = arr.filter((item,index) =>{

// return item && item >5;
// }
// );
// console.log(filter);


let arr = [
{name : 'nghi' , age: 20},
{name : 'minh' , age: 1},
{name: 'khiem' , age: 12},
{name : 'thao' , age: 25},
{name : 'thien' , age: 25}

]
let filter = arr.find((item,index) =>{

    return item && item.age===25;
    }
    );
    console.log(filter);