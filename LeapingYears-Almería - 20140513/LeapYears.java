package leapyears;

public class LeapYears {

	public boolean isLeap(int year) {
		boolean result = 
				isComonLeapYear(year) ||
				isUncommonLeapYear(year);
		return result;
	}

	private boolean isUncommonLeapYear(int year) {
		return isDivisibleBy400(year) ;
	}

	private boolean isComonLeapYear(int year) {
		return isDivisibleBy4(year) && !isDivisible(year, 100);
	}

	private boolean isDivisibleBy400(int year) {
		return isDivisible(year, 400);
	}

	private boolean isDivisibleBy4(int year) {
		return isDivisible(year, 4);
	}

	private boolean isDivisible(int num, int base) {
		return (num % base) == 0;
	}
	
	
}
