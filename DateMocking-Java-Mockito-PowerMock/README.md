Examples from de #IWT2 DojoUs dojo code celebrated the December-20-2013 in Sevilla (Spain).

#IWT2 DojoUs official web page (Spanish only):  http://www.iwt2.org/web/opencms/IWT2/comunidad/dojous/?locale=es

This repository contains some basic examples of how to use Mockito to create spies from interfaces and from real classes. 
It also contains a very simple example of test doubles usage. We test a simple class (called ServiceCaller) that decides if call a method from another class depending on the system’s date. We have implemented three strategies to indicate the right date.
First, a real Java Calendar object with the proper day number is passed to ServiceCaller.
Second, the requesting for the actual date is modeled as another different service and this service is mocked using Mockito.
Third, the proper ServiceCaller gets the system date an PowerMock is used to modify this call and returns the right date.

You neeed mockito.jar to run the Mockito example. You need mockito and powermock.jar, powermock-mockito.jar and javassist.jar to run PowerMock example.



