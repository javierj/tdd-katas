package ejemploservicio;

import java.util.Calendar;

/**
 * This class has several methods overloaded to show diferent
 * strategies to test this class.
 * 
 * See TestServiceCalle classes to discover these strategies.
 * 
 * @author Javier
 *
 */
public class ServiceCaller {

	private Service service;
	private DateService dateservice;

	public ServiceCaller(Service service) {
		this.service = service;	
	}

	public ServiceCaller(Service service, DateService dateservice) {
		this(service);
		this.dateservice = dateservice;
	}

	/**
	 * Obtains the actual date from a parameter
	 * @param date Actual date
	 */
	public void timeToCall(Calendar date) {
		if ((date.get(Calendar.DAY_OF_MONTH ) % 2) == 0) {
			this.service.update();
		}
	}

	/**
	 * Obtains the actual date from a given date service
	 */
	public void timeToCall() {
		Calendar date = this.dateservice.today();
		if ((date.get(Calendar.DAY_OF_MONTH ) % 2) == 0) {
			this.service.update();
		}
	}

	/**
	 * Obtains the actual date directly from the system
	 */
	public void timeToCallActualDate() {
		Calendar date = Calendar.getInstance();
		//System.out.println("Day is: " + date.get(Calendar.DAY_OF_MONTH ));
		if ((date.get(Calendar.DAY_OF_MONTH ) % 2) == 0) {
			this.service.update();
		}
	}

}
