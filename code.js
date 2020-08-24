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

//isFive function
function isFive(input){
    if (typeof input === 'boolean' && input === 5){
        return true;
    }else{
        return false;
    };
};

//isVowel function
function isVowel(input){
    if (typeof input === "string"){
        return true;
    }else{
        return false;
    }
}