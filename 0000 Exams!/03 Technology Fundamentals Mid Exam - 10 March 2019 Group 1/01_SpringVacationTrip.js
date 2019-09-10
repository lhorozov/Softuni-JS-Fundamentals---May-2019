function springVacTrip(input) {
    input = input.map(Number);

    let days = input.shift();
    let budget = input.shift();
    let people = input.shift();
    let fuelPerKm = input.shift();
    let foodExpensesPerDay = input.shift();
    let roomPrice = input.shift();

    let foodExpenses = days * people * foodExpensesPerDay;
    let hotelExpenses = days * people * roomPrice;
    
    if (people > 10) {
        hotelExpenses *= 0.75;
    }

    let currentExpenses = foodExpenses + hotelExpenses;
    let totalExpenses = currentExpenses;

    for (let day = 1; day <= days; day++) {
        travelledDistance = input[day-1];
        let consumedFuelPerDay = fuelPerKm * travelledDistance;
        totalExpenses += consumedFuelPerDay;

        if (day % 3 === 0 || day % 5 === 0) {
            totalExpenses += 0.4 * totalExpenses;
        }
        if (day % 7 === 0) {
            totalExpenses -= totalExpenses / people;
        }
        if (totalExpenses > budget) {
            let diff = totalExpenses - budget;
            console.log(`Not enough money to continue the trip. You need ${diff.toFixed(2)}$ more.`);
            break;
        }
    }
    
    if (totalExpenses <= budget) {
        let money = budget - totalExpenses;
        console.log(`You have reached the destination. You have ${money.toFixed(2)}$ budget left.`);
    }

}
springVacTrip([10
    ,20500
    ,11
    ,1.2
    ,8
    ,13
    ,100
    ,150
    ,500
    ,400
    ,600
    ,130
    ,300
    ,350
    ,200
    ,300]);