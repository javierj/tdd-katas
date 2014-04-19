package fizzbuzz;

import java.util.ArrayList;
import java.util.List;


class Filter {
	
	private int checkValue;
	private String replacement;

	public Filter(int checkValue, String replacement) {
		super();
		this.checkValue = checkValue;
		this.replacement = replacement;
	}

	public String doValue(List<String> numbers, int number, String result) {
		if ( isMultiplo(number)) {
			return result + replacement;
		}
		return result;
	}

	private boolean isMultiplo(int number) {
		return (number % checkValue) == 0;
	}
}


class NumberFilter {
	public String doValue(List<String> numbers, int number, String result) {
		 if (result.compareTo(FizzBuzz.idontknow) == 0) {
			return String.valueOf(number);
		 }
		 return result;
	}

}


public class FizzBuzz {

	static final String idontknow = "";
	
	public List<String> createFor(int limit) {
		List<String> numbers = new ArrayList<>();
		
		String result;
		Filter fizzFilter = new Filter(3, "Fizz");
		Filter buzzFilter = new Filter(5, "Buzz");
		NumberFilter number = new NumberFilter();
		for (int i = 1; i <= limit; i++) {
			result = fizzFilter.doValue(numbers, i, idontknow);
			result = buzzFilter.doValue(numbers, i, result);
			result = number.doValue(numbers, i, result);
			numbers.add(result);
		}
		
		return numbers;
	}

}
