// helloWorld function 
function helloWorld (){
    return "Hello, World!";
}

//sayHello function
function sayHello(input){
    if (typeof input === 'boolean' || input == undefined || input === null || input === "" | input === "5" || typeof input === "object" || input ===2.3){
        return "Hello";
    }
    return "Hello, " + input + "!";
};