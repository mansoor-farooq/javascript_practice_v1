// var a = 20;
// var a = 40; cvar  redeclare  ho ja ta ha or
// console.log("the value of a is ", a);
// let b = ' water ';
// let c = 'park ';   ya redeclare nhi ho ta ha
// const dulha = ' water ';
// const dulhan = 'park han';      / value  never change

// var is a function scop variable means ka ya function () {
//     var a = 10; var jo ha  fuction ka under hi rha ga is bhar nhi chala ga is ko khata ha function scope
// }
//
//
// var a = 200;
// console.log(name is " + name);
// var name = " Mansoor ";
// console.log("name is " + names);
// let names = undefined;
// names = " Mansoor ";             ya is wakut ya error daga  ku ka let kata ha ka jub bunta ha wo undefine ho ta ha

// let names = undefined;
// console.log(names);
// names = "Mansoor";
// console.log(names);

// console.log(names);
// let names = "Mansoor";        // is ma  bhi refrence error a rha ha can not bhi ReferenceError: Cannot access 'names'
//  before initialization ka mutlab ha ka jab tak os ko declare to ho ga lakin is ko value assin nhi is lia ata ha  inisilise sa phala
// value ko get nhi kr sak ta ha
// console.log(names);

// var  ya global ho ta ak bar bana do pora page ma khi par bhio access kr lo is ko lakin functional scope ho ta  or {} bracess
//  ki respect nhi kr ta ya sirf fuction scope ho ta example  ka sat samaj ta ha is ko

// var x = 4;
// console.log(x)
// {
//     var x = 8;       // ya { } ya is ki respeect nhi kr ta
// }
// console.log(x)

// let a = [1, 2, 3, 4];
// let b = a;
// b.push(5); // ya incremant kr ta ha
// b.pop() // ya decrement kr ta ha

// lets get start with symbol

// let mansoor = Symbol("turk");
// let mansoor1 = Symbol("turk");  // kuch bhi ho ya unique hi rha ta ha symbol ki waga sa

// const obj = {
//     uuid: 10,
//     name: "mansoor",
//     age: 25,
//     address: {
//         street: "abc",
//         city: "def"
//     },
//     email: "mansoor@gmail.com",
// }
// console.log(obj)
// let u1 = Symbol("uuid");

// obj[u1] = "001";

// console.log(obj)
// // ya symbol ko acha sa samj na ka lia example ha , object ka under bhi uuid: 10, ha ab hum aghar koi library use kr rha
// ha to hum to nhi pata ka undher kia uuid phala sa declire ha ? to kabi hum apni uuid pass kra to wo overright ho ga ya gi is lia hum
// symbol ka use krta ha
// taka hum overwrite sa bach saka , kia pata hum ma to nhi pata kia logic ha os ma is lia hum symbol ka use krta ha ku ka aghar value over
// right ho jaga to
// hum ma nhi pata ka undher kia value ha or expected value nhi mala osa to wo library ki functionality ma error a gay ga

// lests get  start big int

// let d = 9007199254740991n; // 'n' lagane ka matlab ye BigInt hai
// console.log(d);            // BigInt ko print karega
// let b = 9007199254740996n;// 'n' lagane ka matlab ye BigInt hai

// b = b + d;
// console.log(b);
// let normal = 9007199254740991;
// console.log(normal + 5); // 9007199254740996? ❌ Galat result aayega


// Dynamic typing in js
// js mein static typing nhi hai and js  ma sirf  dynamic typing jis ka matlab hai aap data  ko change kr skte ho kyuka yaha par
// dynamic data types hai ;

// example hai static  typing
// int a = 10; // yai static typing hai or is ma  intiger pass kr na ka bad hum bolean nhi da sakta
// a=true;  // lain java script hama allow krta hai kyuka yaha par dynamic typing hai

// example in Dynamic typing
// let a = 50;
// console.log("number", a); // number
// a = true;    // this is not a error or warning in js this is dynamic typing  bolean type
// console.log("bolean", a); // true
// a = "mansoor"; // this is  string type of data
// console.log("string", a); // mansoor
// a = null; // this is null type in js
// console.log("null", a);
// a = undefined; // this is undefined type in js
// console.log("undefined", a);
// a = ['name', 'age', 'city']; // this is array type in js
// console.log("array", a); // array type in js
// a = {
//     name: 'mansor', age: '19', city: 'karachi'
// } // this is object type in js
// console.log("object", a); // object type in js

// type conversion in js (== vs ===) === is strict equality operator and == is loose equality operator

// "5" + 2
//  result is "52"
// 5 + 2
// result is 7
// "5" -1
// result is 4
// "5" - "2"
// result is 3

// true vs false
// 0 false "" null undefined NaN document.all
//  !! example trick to check data type in js
// !!0
// false
// !!1
// true
// !!NaN
// false
// !! ""
// false
// !! null
// false
// !!document.all
// false












