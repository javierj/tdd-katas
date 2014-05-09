package fizzbuzz;

import java.util.ArrayList;
import java.util.List;


interface FilterValue {
	public String doValue(List<String> numbers, int number, String result);
}


class Filter implements FilterValue {
	
	private int checkValue;
	private String replacement;

	/**
	 * 
	 * @param checkValue
	 * @param replacement
	 */
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


class NumberFilter implements FilterValue {
	public String doValue(List<String> numbers, int number, String result) {
		 if (result.compareTo(FizzBuzz.idontknow) == 0) {
			return String.valueOf(number);
		 }
		 return result;
	}

}


public class FizzBuzz {

	static final String idontknow = "";
	List<FilterValue> filters = new ArrayList<>();
	
	public List<String> createFor(int limit) {
		List<String> numbers = new ArrayList<>();
		String result = idontknow;

		for (int i = 1; i <= limit; i++) {
			result = idontknow;
			for(FilterValue filter: filters) {
				result = filter.doValue(numbers, i, result);
			}
			numbers.add(result);
		}
		
		return numbers;
	}

	public void addFilter(FilterValue filter) {
		this.filters.add(filter);
	}

}
