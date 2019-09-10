function easterGifts(inputArr) {
    let initialArr = inputArr.shift().split(" ");

    for (let i = 0; i < inputArr.length - 1; i++) {
        let splitted = inputArr[i].split(" ");
        let command = splitted[0];
        let product = splitted[1];
        if (command === "OutOfStock") {
            while (initialArr.includes(product)) {
                let index = initialArr.indexOf(product);
                initialArr[index] = "None";
            }
        }
        else if (command === "Required") {
            let index = Number(splitted[2]);
            if (index >= 0 && index < initialArr.length) {
                initialArr.splice(index, 1, product);
            }
        }
        else if (command === "JustInCase") {
            last = initialArr.pop();
            newLast = initialArr.push(product);
        }
    }
    while (initialArr.includes("None")) {
        let index = initialArr.indexOf("None");
        initialArr.splice(index, 1);
    }
    console.log(initialArr.join(" "));
    
}
easterGifts(['Eggs StuffedAnimal Cozonac Sweets EasterBunny Eggs Clothes',
'OutOfStock Eggs',
'Required Spoon 2',
'JustInCase ChocolateEgg',
'No Money'])