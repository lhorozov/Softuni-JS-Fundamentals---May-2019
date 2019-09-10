function onTheWay(input) {
    let obj = {};
    for (let line of input) {
        if (line === 'END') {
            break;
        }
        line = line.split('->');
        let command = line[0];
        let useless = line[1];

        if (command === 'Add') {
            let store = line[1];
            let items = line[2].split(',');

            if (!obj.hasOwnProperty(store)) {
                obj[store] = [];
                for (let item of items) {
                    obj[store].push(item);
                }
            } else {
                for (let item of items) {
                    obj[store].push(item);
                }
            }
        }
        else if (command === 'Remove') {
            if (obj.hasOwnProperty(useless)) {
                delete obj[useless];
            };
        }

    }
    let sorted = Object.entries(obj)
    .sort((a, b) => {
        let result = b[1].length - a[1].length;
        if (result === 0) {
            result = b[0].localeCompare(a[0]);
        }
        return result;
    })
   
    console.log(`Stores list:`);

    for (let sort of sorted) {
        console.log(`${sort[0]}`);
        for (let item of sort[1]) {
            console.log(`<<${item}>>`);
        }
    }
}
onTheWay([
    'Add->PeakSports->Map,Navigation,Compass',
    'Add->Paragon->Sunscreen',
    'Add->Groceries->Dried-fruit,Nuts',
    'Add->Groceries->Nuts',
    'Add->Groceries->Nuts',
    'Add->Groceries->Nuts',
    'Add->Paragon->Tent',
    'Remove->Paragon',
    'Add->Pharmacy->Pain-killers',
    'END'
    
]);