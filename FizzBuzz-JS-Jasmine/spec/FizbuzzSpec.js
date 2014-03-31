describe("With fizbuzzTo(limit)", function() {

    it("should show [1, 2] when fizzbuzzing to 2", function() {
        result = fizbuzzTo(2);
        expect(result).toEqual([1, 2]);

    });

    it("should show [1, 2, Fizz] when fizzbuzzing to 3", function() {
        result = fizbuzzTo(3);
        expect(result).toEqual([1, 2, "Fizz"]);

    });

    it("should show [1, 2, Fizz, 4, Buzz] when fizzbuzzing to 5", function() {
        result = fizbuzzTo(5);
        expect(result).toEqual([1, 2, "Fizz", 4, "Buzz"]);

    });

    it("should show [1, 2, Fizz, 4, Buzz, Fizz, 7, 8, Fizz, Buzz, 11, Fizz, 13, 14] when fizzbuzzing to 14", function() {
        result = fizbuzzTo(14);
        expect(result).toEqual([1, 2, "Fizz", 4, "Buzz", "Fizz", 7, 8, "Fizz", "Buzz", 11, "Fizz", 13, 14]);

    });

    /* It's borong writting all the result list so I watch only the value that has something special
     */
    it("should end with FizzBuzz when fizzbuzzing to 15", function() {
        result = fizbuzzTo(15);
        expect(result[14]).toEqual("FizzBuzz");

    });

    it("should end with FizzBuzz when fizzbuzzing to 30", function() {
        result = fizbuzzTo(30);
        expect(result[29]).toEqual("FizzBuzz");

    });

});