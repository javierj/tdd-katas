package leapyear;

import static org.junit.Assert.*;

import org.junit.Before;
import org.junit.Test;

public class TestLeapYear {

	private LeapYear leapYear;

	@Before
	public void setUp() throws Exception {
		leapYear = new LeapYear();
	}

	@Test
	public void when1996_thenIsLeap() {
		boolean isLeap = isLeap(1996);
		assertTrue(isLeap);
	}

	@Test
	public void when2001_thenIsNotLeap() {
		boolean isLeap = this.isLeap(2001);
		assertFalse(isLeap);
	}

	@Test
	public void when1900_thenIsNotLeap() {
		assertFalse(this.isLeap(1900));
	}

	@Test
	public void when2000_thenIsLeap() {
		assertTrue(isLeap(2000));
	}


	private boolean isLeap(int year) {
		return leapYear.isLeap(year);
	}

	
	
}
