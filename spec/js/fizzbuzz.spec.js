describe("FizzBuzz changes numbers to strings:", () =>{
    it("Takes 1 and returns '1'.",()=>{
        expect(interpret(1)).toBe('1');
    });
    it("Takes 2 and returns '2'.", () =>{
        expect(interpret(2)).toBe('2');
    });
    it("Takes 3 and returns 'Fizz'.", () =>{
        expect(interpret(3)).toBe('Fizz');
    });
    it("Takes 5 and returns 'Buzz'.", ()=>{
        expect(interpret(5)).toBe('Buzz');
    });
    it("Takes 15 and returns 'FizzBuzz'.", ()=>{
        expect(interpret(15)).toBe('FizzBuzz');
    });
});