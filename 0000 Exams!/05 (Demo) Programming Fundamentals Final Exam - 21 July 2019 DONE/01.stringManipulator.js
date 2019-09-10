function stringManipulator(input) {
    let resultString = "";
    let indexChar = [];
    for (let line of input) {
        line = line.split(" ");
        let command = line[0];

        if (command === "Add") {
            resultString += line[1];
        }
        else if (command === "Upgrade") {
            let char = line[1];
            let charNum = char.charCodeAt(0);
            let newNum = charNum + 1;
            let newChar = String.fromCharCode(newNum);

            while (resultString.includes(char)) {
                resultString = resultString.replace(char, newChar);
            }
        }
        else if (command === "Print") {
            console.log(resultString);
        }
        else if (command === "Index") {
            let char = line[1];
            let index = resultString.indexOf(char);
            while (index !== -1) {
                indexChar.push(index);
                index = resultString.indexOf(char, index + 1);
            }
            if (indexChar.length > 0) {
                console.log(indexChar.join(" "))
            } else {
                console.log(`None`);
            }
        }
        else if (command === "Remove") {
            let str = line[1];
            resultString = resultString.replace(str, '');
            while (resultString.includes(str)) {
                resultString = resultString.replace(str, '');
            }
        }
    }
}
stringManipulator(['Add abracadabra',
    'Print',
    'Upgrade a',
    'Print',
    'Index b',
    'Remove bbrb',
    'Print',
    'End']);