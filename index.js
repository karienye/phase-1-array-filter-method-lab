// Code your solution here
function findMatching(drivers, customer) {
    const names = drivers.filter 
    (driver => driver.toUpperCase() === customer.toUpperCase());
    return names;
    }
  
  function fuzzyMatch(drivers, customer) {
    const names = drivers.filter 
    (driver => driver.toLowerCase().indexOf (customer.toLowerCase())=== 0 );
    return names;
    }
  
  function matchName(drivers, customer) {
    const names = drivers.filter 
    (driver => driver.name === customer);
    return names;
    }
