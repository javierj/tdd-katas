import static org.junit.Assert.*;

import org.junit.Test;


public class TestFracciones {

	@Test
	public void testZeroFractionPlusZeroFraction_ReturnsZeroFraction() {
		Fraction zeroFraction = new Fraction(0, 0);
		
		Fraction res = zeroFraction.sum(zeroFraction);
		
		assertTrue(res.isSameFraction(zeroFraction));
	}

	@Test
	public void testSumAndCalculateCommonDenominador() {
		Fraction fractionA = new Fraction(1, 2);
		Fraction fractionB = new Fraction(4, 3);
		Fraction expectedResult = new Fraction(11, 6);
		
		Fraction res = fractionA.sum(fractionB);
		
		assertTrue(res.isSameFraction(expectedResult));
	}


	@Test
	public void testSum_OperatorsDoesnotChange() {
		Fraction fractionA = new Fraction(1, 2);
		Fraction fractionB = new Fraction(4, 3);
		
		fractionA.sum(fractionB);
		
		assertTrue(fractionA.isSameFraction(new Fraction(1, 2)));
		assertTrue(fractionB.isSameFraction(new Fraction(4, 3)));
	}

	
	@Test
	public void testSum_FractionIsSimplifiedDividedBy2() {
		Fraction fractionA = new Fraction(1, 2);
		Fraction fractionB = new Fraction(3, 4);
		
		Fraction expectedResult = new Fraction(5, 4);
		
		Fraction res = fractionA.sum(fractionB);
		
		assertTrue(res.isSameFraction(expectedResult));
	}

	
	@Test
	public void testSum_FractionIsSimplifiedDividedBy3() {
		Fraction fractionA = new Fraction(3, 3);
		Fraction fractionB = new Fraction(3, 3);
		
		Fraction expectedResult = new Fraction(2, 1);
		
		Fraction res = fractionA.sum(fractionB);
		
		assertTrue(res.num + "/" + res.den, res.isSameFraction(expectedResult));
	}
	
	@Test
	public void testSum_FractionWithXeroInNum() {
		Fraction fractionA = new Fraction(1, 3);
		Fraction fractionB = new Fraction(0, 4);
		
		Fraction expectedResult = new Fraction(1, 3);
		
		Fraction res = fractionA.sum(fractionB);
		
		assertTrue(res.num + "/" + res.den, res.isSameFraction(expectedResult));
		
	}
	
	
	@Test
	public void testSumWithZeroFraction() {
		Fraction fractionA = new Fraction(1, 3);
		Fraction zeroFraction = new Fraction(0, 0);
		
		Fraction expectedResult = new Fraction(1, 3);
		
		Fraction res = fractionA.sum(zeroFraction);
		assertTrue(res.num + "/" + res.den, res.isSameFraction(expectedResult));
		
		res = zeroFraction.sum(fractionA);
		assertTrue(res.num + "/" + res.den, res.isSameFraction(expectedResult));
	}
	
	@Test(expected = Fraction.WrongFractionException.class)
	public void testFractionWithZeroDen() {
		Fraction wrongFraction = new Fraction(3, 0);
	}
}


