function helloFrance([shop, budget]) {
    let splitted = shop.split("|");
    let maxForClothes = 50;
    let maxForShoes = 35;
    let maxForAccessories = 50;
    budget = Number(budget);

    let result = [];
    let profit = 0;


    for (let items of splitted) {
        let splitted = items.split("->");
        let type = splitted[0];
        let price = Number(splitted[1]);

        if (type === "Clothes" && price <= maxForClothes) {
            if (budget - price >= 0) {
                let priceWithProfit = price * 1.4;
                result.push(priceWithProfit.toFixed(2));
                profit += priceWithProfit - price;
                budget -= price;

            }
        }
        else if (type === "Shoes" && price <= maxForShoes) {
            if (budget - price >= 0) {
                let priceWithProfit = price * 1.4;
                result.push(priceWithProfit.toFixed(2));
                profit += priceWithProfit - price;
                budget -= price;
            }
        }
        else if (type === "Accessories" && price <= maxForAccessories) {
            if (budget - price >= 0) {
                let priceWithProfit = price * 1.4;
                result.push(priceWithProfit.toFixed(2));
                profit += priceWithProfit - price;
                budget -= price;
            }
        }

    }
    let sum = result.map(Number).reduce((a, b) => (a + b));
    console.log(result.join(" "));
    console.log(`Profit: ${profit.toFixed(2)}`);


    if (budget + sum >= 150) {
        console.log(`Hello, France!`);
    } else {
        console.log(`Time to go.`);

    }
}
helloFrance([`Shoes->41.20|Clothes->20.30|Accessories->40|Shoes->15.60|Shoes->33.30|Clothes->48.60`,
    `90`]);