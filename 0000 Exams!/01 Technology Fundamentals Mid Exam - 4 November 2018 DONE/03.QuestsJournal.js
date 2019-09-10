function questJournal(input) {
    let initialArr = input.shift().split(", ");

    for (let i = 0; i < input.length; i++) {
        let commands = input[i].split(" - ");
        let command = commands[0];
        while (command !== "Retire!") {
            let value = commands[1];
            if (command === "Start") {
                if (initialArr.includes(value)) {
                    break;
                } else {
                    initialArr.push(value);
                    break;
                }
            }
            else if (command === "Complete") {
                if (initialArr.includes(value)) {
                    let index = initialArr.indexOf(value);
                    initialArr.splice(index, 1);
                    break;
                } else {
                    break;
                }
            }
            else if (command === "Side Quest") {
                let splitted = value.split(":");
                let quest = splitted[0];
                let sideQuest = splitted[1];
                if (initialArr.includes(quest)) {
                    if (initialArr.includes(sideQuest)){
                        break;
                    } else {
                        let index = initialArr.indexOf(quest);
                        initialArr.splice(index + 1, 0, sideQuest);
                        break;
                    }
                    
                } else {
                    break;
                }
            }
            else if (command === "Renew") {
                if (initialArr.includes(value)) {
                    let index = initialArr.indexOf(value);
                    let renew = initialArr.splice(index, 1);
                    initialArr.push(renew[0]);
                    break;
                } else {
                    break;
                }
            }
        }
    }
    console.log(initialArr.join(", "));
}

questJournal([`Hello World, If else`
    ,`Complete - Homework`
    ,`Side Quest - If else:Switch`
    ,`Renew - Hello World`
    ,`Retire!`
    
])