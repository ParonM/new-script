// alert('hello');

// let name = "Tomas";
// switch (name) {
//     case "Harry":
//         console.log("this is a Harry");
//         break;
//     case "John":
//         console.log("this is a John");
//         break;
//     case "Tomas":
//         console.log("this is a Tomas");
//         break;
//     default:
//         console.log("unknown name");
// }


// for (var number=6; number < 10; number++){
//     console.log("Its true number" + number);
// }


// for (var a=30; a > 25; a--){
//     console.log("number-" + a)
// }


// var i = 7;
// while (i >= 0) {
//     console.log("Countdown: " + i);
//     i--;
// }

// var x = 2;
// do {
//     console.log("Even number: " + x);
//     x++;
// } while (x < 10);


// var n = 11;
// do {
//     console.log("Loops.")
//     n++;
// }while (n < 10);      // do...while-i jamanak erb voch mi true chi tpum uremn tpuma mi hat false


// for (var j = 0; j < 10; j++) {
//     if (j == 2) {
//         break;
//     }
//     console.log(j)
// }


// var k = 0;
// while (k < 10) {
//     k++;
//     console.log("Start " + k);
//     if (k == 2 || k == 5) {
//         continue;
//     }
//     // some code
//     console.log("End " + k);
// }


// // for...in
// var user = {
//     name: "Smith",
//     age: 25,
//     country: "USA"
// };
// for (var key in user) {
//     console.log(key);
//     console.log(user[key]); //object-neri hamar ogtagorcvuma key
// }


// var names = ["John", "25", "USA"];
// for (var value of names) {
//     var str = "Test " + value;
//     console.log(str)   //massiv-i jamanak ogtagorcvuma value
// }





// let name = "Hovo",
//     name1 = "Mark";

// function showMessage() {
//     alert("Hello my name is " + name);
//     alert("Hello my name is " + name1);
// }

// showMessage();
// showMessage();



// function plus(a,b) {
//     return a + b;
// }
// const c = plus(5,6);



// function noReturn() {
//     var sum = 0;
//     for(var i = 0; i < 10; i++){
//         sum += i;
//     }
//         console.log(sum);
// }

// noReturn();



// var firstFunction = function () {
//     console.log("Run firstFunction");
// };
// function runFunction(param) {
//     console.log("Run runFunction");
//     param();
// };
// runFunction(firstFunction);



// var firstFunction = function () {
//     return "Run firstFunction.";
// };
// function runFunction(param) {
//     var first = "Run runFunction";
//     var last = param();
//     return first + last;
// };
// console.log(runFunction(firstFunction));




let name = "Hovo",
    name1 = "Mark";

var showMessage = function () {
    console.log("Hello my name is " + name);
}
function newMessage (x) {
    console.log("and my name is " + name1);
    x()
}
newMessage(showMessage);


