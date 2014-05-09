package fizzbuzz;

import static org.junit.Assert.*;

import java.util.List;

import org.junit.Before;
import org.junit.Test;

public class TestFizzBuzz {

	List<String> result;
	private FizzBuzz fizzbuzz;
	
	@Before
	public void setUp() throws Exception {
		fizzbuzz = new FizzBuzz();
		fizzbuzz.addFilter( new Filter(3, "Fizz") );
		fizzbuzz.addFilter( new Filter(5, "Buzz") );
		fizzbuzz.addFilter( new NumberFilter() );
	}

	@Test
	public void whenNumerIsZero_ReturnsEmptyList() {
		result = fizzbuzz.createFor(0);
		
		assertTrue(result.isEmpty());
	}

	@Test
	public void whenNumerIsTwo_ReturnsListWithOneAndTwo() {
		result = fizzbuzz.createFor(2);
		
		assertEquals("[1, 2]", result.toString());
	}

	@Test
	public void whenNumerIsThree_LastelementIsFizz() {
		result = fizzbuzz.createFor(3);
		
		assertEquals("Fizz", result.get(2));
	}

	@Test
	public void whenNumerIsFour_AfterFizzComesFour() {
		result = fizzbuzz.createFor(4);
		
		System.out.println(result);
		assertEquals("4", result.get(3));
	}

	@Test
	public void whenNumerIsFive_LastelementIsBuzz() {
		result = fizzbuzz.createFor(5);
		
		assertEquals("Buzz", result.get(4));
	}

	
	@Test
	public void whenNumerIsFifteen_ListIs() {
		result = fizzbuzz.createFor(14);
		
		assertEquals("[1, 2, Fizz, 4, Buzz, Fizz, 7, 8, Fizz, Buzz, 11, Fizz, 13, 14]", 
				result.toString());
	}


	@Test
	public void whenNumerIsFifteen_LastResultIsFizzBuzz() {
		result = fizzbuzz.createFor(15);
		
		assertEquals("FizzBuzz", 
				result.get(14));
	}

}
