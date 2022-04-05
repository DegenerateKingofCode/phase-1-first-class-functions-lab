const returnFirstTwoDrivers = function(drivers){
    return [drivers[0], drivers[1]]}

const returnLastTwoDrivers = function(drivers){
    return drivers.slice(-2);
}
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(time){
    return fare => fare * time 

}
function fareDoubler(fare){
    return fare * 2
}
function fareTripler(fare){
    return fare * 3
}
function selectDifferentDrivers(drivers, driverFunction){
    return driverFunction(drivers)
}