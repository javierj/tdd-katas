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