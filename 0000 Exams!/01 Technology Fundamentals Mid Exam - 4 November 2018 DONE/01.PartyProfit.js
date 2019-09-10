function partyProfit(input) {
    size = Number(input[0]);
    days = Number(input[1]);
    let coins = 0;

    for (let i = 1; i <= days; i++) {
        if (i % 10 === 0) {
            size -= 2;
        }
        if (i % 15 === 0) {
            size += 5;
        }
        coins += 50;
        coins -= 2 * size;
        if (i % 3 === 0) {
            coins -= 3 * size;
        }
        if (i % 5 === 0) {
            coins += 20 * size;
            if (i % 3 === 0) {
                coins -= 2 * size;
            }
        }
    }
    let coinsPerCompanion = Math.floor(coins / size)
    console.log(`${size} companions received ${coinsPerCompanion} coins each.`);
    
}
partyProfit([15, 30]);