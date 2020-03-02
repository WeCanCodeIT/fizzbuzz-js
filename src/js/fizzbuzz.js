const interpret = (number) => {
    if (number === 3) {
        return "Fizz";
    } if (number === 5) {
        return "Buzz";
    }
    if (number === 15) {
        return "FizzBuzz";
    }
    return number + "";
}