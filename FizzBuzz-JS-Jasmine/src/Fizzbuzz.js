IDontKnow = "";

function fizzFilter(value) {
    if ((value % 3) == 0)
        return "Fizz";
    return IDontKnow;
}

// Buzzfilter and whizzFilter are too similar. Refactorization needed

function buzzFilter(value, result) {
    if ((value % 5) == 0)
        return result + "Buzz";
    return result;
}

function whizzFilter(value, result) {
    if ((value % 7) == 0)
        return result + "Whizz";
    return result;
}

function numFilter(value, result) {
    if (result == IDontKnow)
        return value;
    return result;
}

function fizbuzzTo(limit) {
    values = []
    for (var i = 1; i <= limit; i++) {
        result = fizzFilter(i);
        result = buzzFilter(i, result);
        result = whizzFilter(i, result);
        result = numFilter(i, result);
        values.push(result);
    };
    return values;
}

/**
	Bad version. Works fine but the code is a mess
	I use this version to do mockey patch and mocking the console during testing
**/

function fizzbuzz_toconsole() {
    function generate(input) {
        return ((fizz(input) && buzz(input) && 'FizzBuzz') ||
            fizz(input) || buzz(input)) || input;

        function fizz(input) {
            return ((input % 3) === 0) ? 'Fizz' : false;
        }

        function buzz(input) {
            return ((input % 5) === 0) ? 'Buzz' : false;
        }
    }

    var i;
    for (i = 1; i <= 5; i++) {
        console.log(generate(i));
    }
}