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
    })
});