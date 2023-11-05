//for morden javascropt we can use  "use script"

const array1 = [1, 4, 9, 16];
const map1=array1.map((name)=>name*2)//this arrow function
const map2=array1.map(function(name){   //this is regular function
    return name*2
})
// console.log(map1);


//push data

const map3 = new Map();

map3.set('a', 1);
map3.set('b', 2);
map3.set('c', 3);