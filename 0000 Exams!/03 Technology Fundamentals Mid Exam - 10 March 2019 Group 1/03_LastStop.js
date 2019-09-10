function lastStop(input) {
    let paintings = input.shift().split(" ").map(Number);

    for (let line of input) {
        let splitted = line.split(" ");
        let command = splitted[0];

        if (command === "Change") {
            let paintingNumber = Number(splitted[1]);
            let changedNumber = Number(splitted[2]);
            let index = paintings.indexOf(paintingNumber);
            if (paintings.includes(paintingNumber)) {
                paintings.splice(index, 1, changedNumber);
            }
        }
        if (command === "Hide") {
            let paintingNumber = Number(splitted[1]);
            let index = paintings.indexOf(paintingNumber);
            if (paintings.includes(paintingNumber)) {
                paintings.splice(index, 1);
            }
        }
        if (command === "Switch") {
            let paintingNumberOne = Number(splitted[1]);
            let paintingNumberTwo = Number(splitted[2]);
            if (paintings.includes(paintingNumberOne) && paintings.includes(paintingNumberTwo)) {
                let indexOne = paintings.indexOf(paintingNumberOne);
                let indexTwo = paintings.indexOf(paintingNumberTwo);
                let workIndex = indexOne;
                paintings[workIndex] = paintingNumberTwo;
                paintings[indexTwo] = paintingNumberOne;
            }

        }
        if (command === "Insert") {
            let place = Number(splitted[1]);
            let paintingNumber = Number(splitted[2]);
            if (place >= 0 && place <= paintings.length) {
                paintings.splice(place + 1, 0, paintingNumber);
            }
        }
        if (command === "Reverse") {
            paintings = paintings.reverse()
        }
    }
    console.log(paintings.join(" "));

}
lastStop(['115 115 101 114 73 111 116 75',
    'Insert 5 114',
    'Switch 116 73',
    'Hide 75',
    'Reverse ',
    'Change 73 70',
    'Insert 10 85',
    'END'])