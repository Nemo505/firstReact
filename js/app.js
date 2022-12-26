const obj = {

    //properties
    a: "a",
    b: "b",

    //method
    c: function(){
        return "this is c";
    },

    d(){
        return "this is d";
    },
};

console.log(obj.c());
console.log(obj["c"]());

console.log(obj.a);
console.log(obj["a"]);

const st4 = new String("min ga la par");
console.log(st4[4]);
console.log(st4.split("g"));

const fun = new Function ();

let currentDate = new Date();
let next300 = new Date();
next300.setHours(currentDate.getHours() + 12)
console.log(next300);

function calcCost(amount, price = 200){
    let cost = amount*price;
}
let amount = window.prompt("Input Amount");
window.alert(calcCost(amount));