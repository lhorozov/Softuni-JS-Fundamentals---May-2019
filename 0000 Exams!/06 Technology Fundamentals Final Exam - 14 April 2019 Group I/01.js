function arrivingAtKathmandu(input) {
    let nameResult = "";
    for (let line of input) {
        if (line === 'Last note') {
            break;
        }

        // let pattern = /(?<name>[[A-Za-z\d!@#$?]*)=(?<number>\d+)<<(?<geohashcode>[A-Za-z0-9]+)/gm;
        let pattern = /^(?<name>[A-Za-z0-9!@#$?]+)=(?<number>\d+)<<(?<geohashcode>.+)$/gm;
        
        let result = pattern.exec(line);
        if (result) {
            while (result !== null) {
                let nameString = result.groups['name'];
                for (let symbol of nameString) {
                    symbol = symbol.charCodeAt();
                    if ((symbol >= 48 && symbol <= 57) || symbol >= 65 && symbol <= 90 || symbol >= 97 && symbol <= 122) {
                        nameResult += String.fromCharCode(symbol);
                    }
                }
                let num = Number(result.groups['number']);
                let geohash = result.groups['geohashcode'];
                if (nameResult.length > 0 && num === geohash.length) {
                    console.log(`Coordinates found! ${nameResult} -> ${geohash}`);
                } else {
                    console.log(`Nothing found!`);
                }
                result = pattern.exec(line);
                nameResult = "";
            } 
        } else {
            console.log(`Nothing found!`);
        }
    }
}
arrivingAtKathmandu([
    'Ka?!#nch@@en@ju##nga@=3<<thfbghvn',
    '=9Cho?@#Oyu<<thvb7ydht',
    'Nan??ga#Par!ba!t?=16<<twm03q2rx5hpmyr6',
    'Dhau??la#gi@ri?!#=3<<bvnfhrtiuy',
    'Last note'
    
]);