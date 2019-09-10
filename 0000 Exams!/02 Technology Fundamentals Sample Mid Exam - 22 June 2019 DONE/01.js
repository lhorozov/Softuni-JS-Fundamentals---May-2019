function partyProfit(inputArr) {
    size = Number(inputArr[0]);
    days = Number(inputArr[1]);
    let coins = 0;
    let companions = size;
    for (let i = 1; i <= days; i++) {
        if (i % 10 === 0) {
            companions -= 2;
        }
        if (i % 15 === 0) {
            companions += 5;
        }
        coins += 50;
        coins -= 2 * companions;
        if (i % 3 === 0) {
            coins -= 3 * companions;
        }
        if (i % 5 === 0) {
            coins += 20 * companions;
            if (i % 3 === 0) {
                coins -= 2 * companions;
            }
        }
    }
    let coinsPerCompanion = Math.floor(coins / companions);
    console.log(`${companions} companions received ${coinsPerCompanion} coins each.`);
}
partyProfit([`15`, `30`]);