 Kata FizzBuzz (link) 
=========================================================

Using JavaScript.

Folder *src contains source code, folder *spec* contain test cases as Jasmine's specifications. Three variants are included in the source code and test cases. Each variant has its own *describe* suite.

In first variant, 7 is 'Whizz', 21 is "FizzWhizz", etc. This is a very good variant to test the open/close principle in your solution.

Second variant uses a poor code that writes directly into console.log and uses monkey patch to change the log function and verify the results.

Third variant uses the same poor code than variant 2, but now a Jasmine's spy is created to verify that console.log has been called with the right parameter.
