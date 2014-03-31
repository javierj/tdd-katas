IDontKnow = "";

function fizzFilter(value) {
    if ((value % 3) == 0)
        return "Fizz";
    return IDontKnow;
}

function buzzFilter(value, result) {
    if ((value % 5) == 0)
        return result + "Buzz";
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
        result = numFilter(i, result);
        values.push(result);
    };
    return values;
}