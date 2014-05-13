import static org.junit.Assert.*;
import leapyears.LeapYears;

import org.junit.Before;
import org.junit.Test;


public class TestLeap {

	private LeapYears leapyears;


	@Before
	public void setUp() throws Exception {
		leapyears = new LeapYears();
	}

	@Test
	public void when_SimpleYear_2001__then_NotLeap() {
		
		assertFalse(leapyears.isLeap(2001));
	}

	
	@Test
	public void when_1996__then_Leap() {
		
		assertTrue(leapyears.isLeap(1996));
	}

	@Test
	public void when_1900__then_NitLeap() {
		
		assertFalse(leapyears.isLeap(1900));
	}

	
	@Test
	public void when_2000__then_Leap() {
		
		assertTrue(leapyears.isLeap(2000));
	}

}
