package ejemploservicio;

import static org.junit.Assert.*;
import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;

import java.util.Calendar;

import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.powermock.core.classloader.annotations.PrepareForTest;
import org.powermock.modules.junit4.PowerMockRunner;
import org.powermock.reflect.Whitebox;
import static org.powermock.api.mockito.PowerMockito.*;
import static org.hamcrest.BaseMatcher.*;
import static org.mockito.Mockito.*;

/**
 * Using PowerMock + Mockito.
 * 
 * This class test the variant of ServiceCaller that obtains the
 * actual day by itself
 * 
 * PowerMock changes the method to obtain the actual data.
 * 
 * @author Javier
 *
 */
@RunWith(PowerMockRunner.class)
@PrepareForTest(ServiceCaller.class)
public class TestServiceCallerWithPowerMock {

	private Service service;
	private Calendar date;
	private ServiceCaller caller;


	@Before
	public void setUp() throws Exception {
	    service = mock(Service.class);
		caller = new ServiceCaller(service);
		date = Calendar.getInstance();
	}

	/**
	 * Example of PowerMock usage
	 */
	@Test
	public void testPowerMockIsWorking() {
		date.set(Calendar.DAY_OF_MONTH, 2);
		
		mockStatic(Calendar.class);
	    when(Calendar.getInstance()).thenReturn(date);
    
	    Calendar c = Calendar.getInstance();
	    assertEquals(2, c.get(Calendar.DAY_OF_MONTH));
	}
	
	
	@Test
	public void whenDayIs_2_serviceIsCalled() {
		date.set(Calendar.DAY_OF_MONTH, 2);
		
		mockStatic(Calendar.class);
	    when(Calendar.getInstance()).thenReturn(date);
		
		caller.timeToCallActualDate();

		verify(service).update();
	}


	@Test
	public void whenDayIs_3_serviceIsNotCalled() {
		date.set(Calendar.DAY_OF_MONTH, 3);
		
		mockStatic(Calendar.class);
	    when(Calendar.getInstance()).thenReturn(date);

		caller.timeToCallActualDate();
		
		verify(service, never()).update();
	}

}
