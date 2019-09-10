
//areas => {} => area: [unfed animals];
//animals => {} => name: dailyFoodLimit;
function feedTheAnimals(input) {
    let animals = {};
    let areas = {};

    for (let line of input) {
        if (line === "Last Info") {
            break;
        }
        

        line = line.split(":");
        let command = line[0];
        let name = line[1];
        let dailyFoodLimit = Number(line[2]);
        let area = line[3];

        if (command === "Add") {
            if (!animals[name]) {
                animals[name] = dailyFoodLimit;
            } else {
                animals[name] += dailyFoodLimit;
            }

            if (!areas[area]) {
                areas[area] = [ name ];
            } else {
                if (!areas[area].includes(name)) {
                    areas[area].push(name);
                }
            }

        }
        else if (command === "Feed") {
            if (animals[name]) {
                animals[name] -= dailyFoodLimit;
                if (animals[name] <= 0) {
                    delete animals[name];
                    let index = areas[area].indexOf(name);
                    areas[area].splice(index, 1);
                    console.log(`${name} was successfully fed`);
                }
            }
        }
    }
    let sortedAnimals = Object.entries(animals).sort((a, b) => {
        let result = b[1] - a[1];
        if (result === 0) {
            result = a[0].localeCompare(b[0]);
        }
        return result;
    });
    console.log(`Animals:`);
    for (let [name, foodLimit] of sortedAnimals) {
        console.log(`${name} -> ${foodLimit}g`);
    }

    console.log(`Areas with hungry animals:`);
    let sortedAreas = Object.entries(areas).sort((a, b) => (b[1].length - a[1].length));
    for (let [area, count] of sortedAreas) {
        if (count.length > 0) {
            console.log(`${area} : ${count.length}`)
        }
    }
}
feedTheAnimals([
    'Add:Maya:7600:WaterfallArea',
    'Add:Bobbie:6570:DeepWoodsArea',
    'Add:Adam:4500:ByTheCreek',
    'Add:Jamie:1290:RiverArea',
    'Add:Gem:8730:WaterfallArea',
    'Add:Maya:1230:WaterfallArea',
    'Add:Jamie:560:RiverArea',
    'Feed:Bobbie:6300:DeepWoodsArea',
    'Feed:Adam:4650:ByTheCreek',
    'Feed:Jamie:2000:RiverArea',
    'Last Info'
]);
// feedTheAnimals([
//     'Add:Bonie:3490:RiverArea',
//     'Add:Sam:5430:DeepWoodsArea',
//     'Add:Bonie:200:RiverArea',
//     'Add:Maya:4560:ByTheCreek',
//     'Feed:Maya:2390:ByTheCreek',
//     'Feed:Bonie:3500:RiverArea',
//     'Feed:Johny:3400:WaterFall',
//     'Feed:Sam:5500:DeepWoodsArea',
//     'Last Info' 
// ]);