
public class Fraction {

	public class WrongFractionException extends RuntimeException {

	}

	int num;
	int den;
	
	public Fraction(int i, int j) {
		num = i;
		den = j;
		
		if ((den == 0) && (num != 0)) {
			throw new WrongFractionException();
		}
	}

	public Fraction sum(Fraction fraction) {
		int newNum = calculateNum(fraction);
		int newDem = calculateDen(fraction);
		Fraction result = new Fraction(newNum, newDem);

		simplifyFraction(result);
		
		return result;
	}

	private void simplifyFraction(Fraction result) {
		int limit = Math.min(result.num, result.den);
		
		
		for (int i = 2; i <= limit; i++) {
			if ( ( (result.num % i) == 0 ) && ( (result.den % i) == 0 ) ) {
				result.num /= i;
				result.den /= i;
				i--;
			}
		}
	}

	private int calculateDen(Fraction fraction) {
		if (fraction.isZero()) {
			return this.den;
		}
		if (this.isZero()) {
			return fraction.den;
		}
		return this.den * fraction.den;
	}

	private int calculateNum(Fraction fraction) {
		if (fraction.isZero()) {
			return this.num;
		}
		if (this.isZero()) {
			return fraction.num;
		}

		return (this.num * fraction.den) + (fraction.num * this.den);
	}

	private boolean isZero() {
		return this.num == 0 && this.den == 0;
	}

	public boolean isSameFraction(Fraction fraction) {
		return (this.num == fraction.num) && (this.den == fraction.den);
	}

}
