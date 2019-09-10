function lastStop(input) {
    let initialArr = input.shift().split(" ").map(Number);

    for (let i = 0; i < input.length; i++) {
        let splitted = input[i].split(" ");
        let command = splitted[0];
        let valueOne = Number(splitted[1]);

        if (command === "Change") {
            let valueTwo = Number(splitted[2]);
            if (initialArr.includes(valueOne)) {
                let index = initialArr.indexOf(valueOne);
                initialArr.splice(index, 1, valueTwo);
            }
        }
        else if (command === "Hide") {
            while (initialArr.includes(valueOne)) {
                let index = initialArr.indexOf(valueOne);
                initialArr.splice(index, 1);
            }
        }
        else if (command === "Switch") {
            let valueTwo = Number(splitted[2]);
            if (initialArr.includes(valueOne) && initialArr.includes(valueTwo)) {
                let firstIndex = initialArr.indexOf(valueOne)
                let secondIndex = initialArr.indexOf(valueTwo)
                initialArr.splice(firstIndex, 1, valueTwo);
                initialArr.splice(secondIndex, 1, valueOne);
            }
        }
        else if (command === "Insert") {
            let valueTwo = Number(splitted[2]);
            if (valueOne >= 0 && valueOne < initialArr.length - 1) {
                initialArr.splice(valueOne + 1, 0, valueTwo);
            }
        }
        else if (command === "Reverse") {
            initialArr = initialArr.reverse();
        }
    }
    console.log(initialArr.join(" "));
}
lastStop([`77 120 115 101 101 97 78 88 112 111 108 101 111 110`,
    `Insert 5 32`,
    `Switch 97 78`,
    `Hide 88`,
    `Change 120 117`,
    `END`]);