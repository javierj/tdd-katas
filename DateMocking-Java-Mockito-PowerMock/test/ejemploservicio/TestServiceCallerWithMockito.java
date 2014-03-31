package ejemploservicio;

import static org.junit.Assert.*;
import static org.mockito.Mockito.*;

import java.util.Calendar;
import java.util.GregorianCalendar;

import org.junit.Before;
import org.junit.Test;

public class TestServiceCallerWithMockito {

	private Service service;
	private Calendar date;

	@Before
	public void setUp() throws Exception {
		service = mock(Service.class);
		date = Calendar.getInstance();

	}

	@Test
	public void whenDayIs_2_serviceIsCalled() {
		ServiceCaller caller = new ServiceCaller(service);
		date.set(Calendar.DAY_OF_MONTH, 2);
		
		caller.timeToCall(date);
		
		verify(service).update();
	}

	@Test
	public void whenDayIs_3_serviceIsCalled() {
		ServiceCaller caller = new ServiceCaller(service);
		date.set(Calendar.DAY_OF_MONTH, 3);
		
		caller.timeToCall(date);
		
		verify(service, never() ).update();
	}

	@Test
	public void whenDayIs_2_serviceIsCalled_withDateService() {
		date.set(Calendar.DAY_OF_MONTH, 2);
		DateService dateservice = mock(DateService.class);
		when(dateservice.today()).thenReturn(date);
		
		ServiceCaller caller = new ServiceCaller(service, dateservice);

		caller.timeToCall();
		
		verify(service).update();
	}

	@Test
	public void whenDayIs_3_serviceIsNotCalled_withDateService() {
		date.set(Calendar.DAY_OF_MONTH, 3);
		DateService dateservice = mock(DateService.class);
		when(dateservice.today()).thenReturn(date);
		
		ServiceCaller caller = new ServiceCaller(service, dateservice);

		caller.timeToCall();
		
		verify(service, never()).update();
	}

	
	
}
