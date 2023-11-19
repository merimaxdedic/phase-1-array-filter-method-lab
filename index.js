function findMatching(drivers, name) {
    const matchingDrivers = [];
  
    for (let driver of drivers) {
      if (driver.toLowerCase().includes(name.toLowerCase())) {
        matchingDrivers.push(driver);
      }
    }
  
    return matchingDrivers
  }

  function fuzzyMatch(drivers, letters) {
    const matchingDrivers = [];
  
    for (let driver of drivers) {
      if (driver.startsWith(letters)) {
        matchingDrivers.push(driver);
      }
    }
  
    return matchingDrivers;
  }

  function matchName(drivers, name) {
    const matchingDrivers = [];
  
    for (let driver of drivers) {
      if (driver.name === name) {
        matchingDrivers.push(driver);
      }
    }
  
    return matchingDrivers;
  }