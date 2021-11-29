// Code your solution in this file!
//1: should return a new array containing the first two drivers from the passed-in array
let driver = ['Sally', 'Bob', 'Freddy', 'Claudia']

const returnFirstTwoDrivers = function(driver){
    return driver.slice(0,2)
}

//2: should return an array of the last two drivers
const returnLastTwoDrivers = function(driver){
    return driver.slice(-2)
}

let selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

const createFareMultiplier = i => {
    return function(fare) {
        return fare * i;
    }
}

const fareDoubler = createFareMultiplier(2)

const fareTripler = createFareMultiplier(3)



const selectDifferentDrivers = (arrayOfDrivers, returnFirstTwoDrivers) => {
    return returnFirstTwoDrivers(arrayOfDrivers, returnFirstTwoDrivers)
}