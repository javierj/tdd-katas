package fizzbuzz;

public class FizzBuzzExpectedUsage {

	public static void main(String[] args) {
		
		FizzBuzz fizzbuzz = new FizzBuzz();
		fizzbuzz.addFiler(new Fizz(3, "Fizz"));
		fizzbuzz.addFiler(new Buzz(5, "Buzz"));
		fizzbuzz.addFiler(new Number());
		
		List<String> result = fizzbuzz.calculateTo(100);
		
	}
	
}
