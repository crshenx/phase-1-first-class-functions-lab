// Code your solution in this file!

const drivers = ["Antonia", "Nuru", "Amari", "Mo"];

const returnFirstTwoDrivers = function (array) {
  let newArray = [array[0], array[1]];
  return newArray;
};

// let newArray = [array[array.length], array[array.length - 1]]

const returnLastTwoDrivers = function (array) {
  let newArray = [array[array.length - 2], array[array.length - 1]];
  return newArray;
};

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier = function (int) {
  return function (multiply) {
    return multiply * int;
  };
};

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

function selectDifferentDrivers(array, cb) {
  let result = cb(array);
  return result;
}

let doubler = createFareMultiplier(fareDoubler(2));
let tripler = createFareMultiplier(fareTripler(3));
console.log(selectDifferentDrivers(drivers, returnFirstTwoDrivers));
