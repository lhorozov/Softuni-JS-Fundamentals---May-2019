function concert(input) {
    let bandsAndTime = {};
    let bandAndStars = {};
    let startOfConcert = false;
    let index = 0;
    let totalTime = 0;
    for (let line of input) {
        line = line.split('; ');
        let command = line[0];
        if (command === 'start of concert') {
            index = input.indexOf(command);
            startOfConcert = true;
            break;
        }
        else if (command === 'Play') {
            let bandName = line[1];
            let time = Number(line[2]);
            totalTime += time;
            if (!bandsAndTime[bandName]) {
                bandsAndTime[bandName] = time;
            } else {
                bandsAndTime[bandName] += time;
            }
        }
        else if (command === 'Add') {
            let bandName = line[1];
            
            for (let i = 2; i < line.length; i++) {
                let starNameArr = line[i].split(', ');
                for (let starName of starNameArr) {
                    if (!bandAndStars[bandName]) {
                        bandAndStars[bandName] = [];
                    } 
                    if (!bandAndStars[bandName].includes(starName)) {
                        bandAndStars[bandName].push(starName);
                    } 
                }
            }
        }
    }
  
    console.log(`Total time: ${totalTime}`);
    let sortedBandsAndTime = Object.entries(bandsAndTime)
    .sort((a, b) => {
        let result = b[1] - a[1];
        if (result === 0) {
            result = a[0].localeCompare(b[0]);
        }
        return result;})
    .forEach(([name, time]) => console.log(`${name} -> ${time}`));
    
    if (startOfConcert) {
            let groupToShow = input[index+1];
            console.log(groupToShow);
            bandAndStars[groupToShow].forEach(line => console.log(`=> ${line}`));
    }
    
}
concert(['Play; The Beatles; 2584',
    'Add; The Beatles; John Lennon, Paul McCartney, George Harrison, Ringo Starr',
    'Add; Eagles; Glenn Frey, Don Henley, Bernie Leadon, Randy Meisner',
    'Play; Eagles; 1869',
    'Add; The Rolling Stones; Brian Jones, Mick Jagger, Keith Richards',
    'Add; The Rolling Stones; Brian Jones, Mick Jagger, Keith Richards, Bill Wyman, Charlie Watts, Ian Stewart',
    'Play; The Rolling Stones; 4239',
    'start of concert',
    'The Rolling Stones']);