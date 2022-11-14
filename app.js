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