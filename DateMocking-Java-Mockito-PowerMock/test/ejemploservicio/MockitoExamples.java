package ejemploservicio;

import static org.junit.Assert.*;

import static org.mockito.Mockito.*;
import  org.mockito.Mockito;

import java.util.ArrayList;
import java.util.Calendar;
import java.util.List;

import org.junit.Before;
import org.junit.Test;

/**
 * Example illustrating the usage of Mockito.
 * 
 * @author Javier
 *
 */
public class MockitoExamples {

	@Before
	public void setUp() throws Exception {
	}

	@SuppressWarnings("unchecked")
	@Test
	public void testMockitoExamplesWithList() {
		List<Integer> l = Mockito.mock(List.class);
		
		// I can call any method from List interface
		l.size();
		l.get(0);
		l.get(100000);
		l.clear();
		
		// Size has been called
		verify(l).size();
		// isEmpty has never been called
		verify(l, never()).isEmpty();
		// get has been called two times with any parameter
		verify(l, times(2)).get(anyInt());
	}

	/**
	 * Using Mockito to create stubs
	 */
	@Test
	public void testList_Get_4_is_42() {
		List l = Mockito.mock(List.class);

		when(l.get(4)).thenReturn(42);
		
		// All calls to get(4) returns 42
		for (int i = 0; i < 10000; i++)
			assertEquals(42, l.get(4));
	}
	
	/**
	 * Using mockito to spy a real class
	 */
	@Test
	public void testSpyList_ClearMethod() {
		List<Integer> l = new ArrayList<Integer>();
		List<Integer> spy =	spy(l);
		
		spy.add(1);
		assertEquals(1, spy.size());
		
		spy.clear();
		assertEquals(0, spy.size());
		
		verify(spy).clear();
	}
	
	/**
	 * Example of how to obtain the actual date
	 */
	@Test
	public void testGestTodayDate() {
		Calendar c = Calendar.getInstance();
		
		// assertEquals(20, c.get(Calendar.DAY_OF_MONTH));
		// assertEquals(2013, c.get(Calendar.YEAR));
	}

	
	@Test
	public void testChangeDate() {
		Calendar c1 = Calendar.getInstance();

		c1.set(Calendar.DAY_OF_MONTH, 2);
		assertEquals(2, c1.get(Calendar.DAY_OF_MONTH));
	}

	
	

}
