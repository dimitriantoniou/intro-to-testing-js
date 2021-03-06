// Unit tests for the helloWorld function
describe('helloWorld', function() {
    it('should be a defined function', function() {
        expect(typeof helloWorld).toBe('function');
    });
    it('should return a string when called', function() {
        expect(typeof helloWorld()).toBe("string");
    });
    it('should return the string "Hello, World!" when executed', function() {
        expect(helloWorld()).toBe("Hello, World!");
    });
    it("should never return 'undefined' when called", function() {
        expect(helloWorld()).not.toBe(undefined);
    });
});

//Unit tests for sayHello function
describe('sayHello', function() {
    it('should be a defined function', function() {
        expect(typeof sayHello).toBe('function');
    });
    it('should return a string when called', function(){
        expect(typeof sayHello()).toBe("string");
    });
    it('should return the string "Hello" when executed', function(){
        expect(sayHello()).toBe("Hello");
    });
    it("should never return 'undefined' when called", function(){
    });
    it ('should return the string "Hello, Jane" when executed',function(){
        expect (sayHello("Jane")).toBe("Hello, Jane!");
    });
    it ('should return the string "Hello, Alex" when execute',function(){
        expect (sayHello("Alex")).toBe("Hello, Alex!");
    });
    it ('should return the string "Hello, Pat" when execute',function(){
        expect (sayHello("Pat")).toBe("Hello, Pat!");
    })
});


//unit tests for isFive function
describe('isFive',function(){
    it('should be a defined function',function(){
        expect(typeof isFive).toBe('function');
    });
    it('should return a boolean when called',function(){
        expect (typeof isFive()).toBe("boolean");
    })
});

//unit tests for isVowel function
describe('isVowel',function(){
    it('should be a defined function',function(){
        expect(typeof isVowel).toBe('function');
    });
    it('should return a boolean when called',function(){
        expect(typeof isVowel()).toBe("boolean");
    });
    it('should return true when executed',function(){
        expect(isVowel("a")).toBe(true);
    });
    it('should return true when executed',function(){
        expect(isVowel("A")).toBe(true);
    });
    it('should return false when executed',function(){
        expect(isVowel("y")).toBe(false);
    });
    it('should return true when execute',function(){
        expect(isVowel("4")).toBe(false);
    });
    it('should return true when executed',function(){
        expect(isVowel("true")).toBe(false);
    });
    it('should return true when executed',function(){
        expect(isVowel("false")).toBe(false);
    });
    it('should return true when executed',function(){
        expect(isVowel("banana")).toBe(false);
    });
    it('should return false when executed',function(){
        expect(isVowel()).toBe(false);
    });
});

describe('add',function(){
    it('should be a defined function',function(){
        expect(typeof add).toBe('function');
    });
    it('should return NaN when passed not a number',function(){
        expect (add(a,b).toBe('NaN'));
    });
});