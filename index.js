// index.js

// Define the findMatching function
function findMatching(drivers, name) {
    return drivers.filter(driver => driver.toLowerCase() === name.toLowerCase());
  }
  
  // Define the fuzzyMatch function
  function fuzzyMatch(drivers, letters) {
    return drivers.filter(driver => driver.toLowerCase().startsWith(letters.toLowerCase()));
  }
  
  // Define the matchName function
  function matchName(drivers, name) {
    return drivers.filter(driver => driver.name === name);
  }
  
  // Export the functions
  module.exports = {
    findMatching,
    fuzzyMatch,
    matchName
  };
  