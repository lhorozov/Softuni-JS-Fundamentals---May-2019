function theIsleOfMan(input) {
    let pattern = /([#$%*&])(?<name>[A-Za-z]+)\1=(?<length>\d+)!!(?<encrypted>[\s\S]+)/gm;
    for (let line of input) {
        let result = pattern.exec(line);
        if (result) {
            while (result !== null) {
                let encryptedLength = result.groups['encrypted'].length;
                let encrypted = result.groups['encrypted'];
                let name = result.groups['name'];
                let length = Number(result.groups['length']);
                if (encryptedLength === length) {
                    let newEncrypted = "";
                    for (let symbol of encrypted) {
                        let symbolNum = symbol.charCodeAt(0);
                        let newSymbol = String.fromCharCode(symbolNum + encryptedLength);
                        newEncrypted +=newSymbol;
                    }
                    console.log(`Coordinates found! ${name} -> ${newEncrypted}`)
                } else {
                    console.log(`Nothing found!`);
                }
    
                result = pattern.exec(line) 
            } 
        } else {
            console.log(`Nothing found!`);
        }
    }
}
theIsleOfMan([
    '%GiacomoAgostini%=7!!hbqw',
    '&GeoffDuke*=6!!vjh]zi',
    'JoeyDunlop=10!!lkd,rwazdr',
    'Mike??Hailwood=5!![pliu',
    '#SteveHislop#=16!!df%TU[Tj(h!!TT[S'
]);
// theIsleOfMan([
//     'Ian6Hutchinson=7!!\\(58ycb4',
//     '#MikeHailwood#!!\'gfzxgu6768=11',
//     'slop%16!!plkdek/.8x11ddkc',
//     '$Steve$=9Hhffjh',
//     '*DavMolyneux*=15!!efgk#\'_$&UYV%h%',
//     'RichardQ^uayle=16!!fr5de5kd' 
// ]);