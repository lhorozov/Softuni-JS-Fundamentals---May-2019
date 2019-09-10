function songEncryption(input) {
    for (let line of input) {
        if (line === 'end') { //заради този ред не можах да реша задачата 2 дена!!!
            break;
        }

        let [name, song] = line.split(":");
        let namePattern = /^[A-Z][a-z\s\']+$/gm;
        let songPattern = /^[A-Z\s]+$/gm;
        let newName = "";
        if (namePattern.test(name) && songPattern.test(song)) {
            for (let i = 0; i < line.length; i++) {

                let asciiCode = line.charCodeAt(i);
                if (line[i] === ":") {
                    newName += "@";
                    continue;
                }

                if (asciiCode >= 65 && asciiCode <= 90) {
                    asciiCode += name.length
                    if (asciiCode > 90) {
                        asciiCode -= 26;
                    }
                }
                else if (asciiCode >= 97 && asciiCode <= 122) {
                    asciiCode += name.length
                    if (asciiCode > 122) {
                        asciiCode -= 26;
                    }
                }

                let newSymbol = String.fromCharCode(asciiCode);
                newName += newSymbol;
            }
            console.log(`Successful encryption: ${newName}`);

        } else {
            console.log(`Invalid input!`);
        }
    }
}
// songEncryption([
//     'Eminem:VENOM',
//     'Linkin park:NUMB',
//     'Drake:NONSTOP',
//     'Adele:HELLO',
//     'end'
// ]);
songEncryption([
    'Michael Jackson:ANOTHER PART OF ME',
    'Adele:ONE AND ONLY',
    "Guns n'roses:NOVEMBER RAIN",
    'Christina Aguilera: HuRt',
    'end'
]);