function fuelMoney(distance, passengers, priceForLiter) {
    
    let fuelConsumption = 7 + (0.1 * passengers);
    let priceTrip = distance * fuelConsumption / 100 * priceForLiter;
    console.log(`Needed money for that trip is ${priceTrip.toFixed(3)}lv.`);
    
}
fuelMoney(90, 14, 2.88); //22.176lv.
fuelMoney(260, 9, 2.49); //47.559lv.