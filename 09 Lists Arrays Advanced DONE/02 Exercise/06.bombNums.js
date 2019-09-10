function bomberman(field, bomb) {
    let numField = field.map(Number);

    let bombNumber = Number(bomb[0]);
    let bombPower = Number(bomb[1]);

    for (let i = 0; i < numField.length; i++) {
        if (bombNumber === numField[i]) {
            if (i - bombPower >= 0) {
                numField.splice(i - bombPower, 2 * bombPower + 1);
                i = -1;
            } else {
                let index = i - bombPower + 2 * bombPower + 1
                if (index > numField.length) {
                    index = numField.length
                }
                numField.splice(0, index);
                i = -1;
            }
        }
    }
let sum = numField.reduce((a, b) => a + b, 0);
console.log(sum);

}
// bomberman([1, 2, 2, 4, 2, 2, 2, 9], [4, 2]);
// bomberman([1, 4, 4, 2, 8, 9, 1], [9, 3]);
// bomberman([1, 7, 7, 1, 2, 3], [7, 1]);
// bomberman([1, 1, 2, 1, 1, 1, 2, 1, 1, 1], [2, 1]);
// bomberman([1, 7, 3, 2, 4, 5], [7, 2]);
// bomberman([1, 7, 7, 1, 2, 3], [7, 2]); // 5
// bomberman([1, 7, 7, 7, 1, 2, 3], [7, 1]); //5
bomberman([3, 3, 4, 5, 6, 7, 3], [5, 3]); //11

