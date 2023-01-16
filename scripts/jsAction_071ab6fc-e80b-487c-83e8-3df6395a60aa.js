//Importing package
var appObj = new Packages.io.perfwise.demo.App();
try {
context.currentVU.put("demoObj", appObj); // Exporting variable to context
var result = appObj.add(5,5); // Accessing the method inside app class
logger.info("THE OUTPUT IS :::: " + result); //Logging the output
} catch (exception) {
logger.debug("Exception occurred ::: \n " + exception);
}