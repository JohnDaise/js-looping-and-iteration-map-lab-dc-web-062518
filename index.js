// Code your solution in this file.
const drivers = [
  { name: 'Bobby',   hometown: 'Pittsburgh'  },
  { name: 'Sammy',   hometown: 'New York'    },
  { name: 'Sally',   hometown: 'Cleveland'   },
  { name: 'Annette', hometown: 'Los Angeles' },
  { name: 'Bobby',   hometown: 'Tampa Bay'   }
];


function lowerCaseDrivers (drivers){
  return drivers.map(function(driver){
    return driver.toLowerCase();
  });
};

function nameToAttributes(drivers){
 let a = drivers.map(function(driver){
  return driver.split(" ")});
     return a.map(function(name){
       return {firstName: name[0], lastName: name[1]}
     });
};


function attributesToPhrase(drivers){
  return drivers.map(driver => {
     return `${driver.name} is from ${driver.hometown}`
   });
};
