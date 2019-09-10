function rageQuit(input) {
    let str = input[0];
    let resultString = "";
    let zeroPattern = /(?<string>[^\d]+)(?<number>0)/gm;
    let stringUsed = str
        .toUpperCase()
        .replace(/(?<string>[^\d]+)(?<number>0)/g, '')
        .replace(/[0-9]/g, '')
        .split("")
        .filter((item, pos, self) => self.indexOf(item) == pos)
        .join("");
    
    let pattern = /(?<string>[^\d]+)(?<number>\d+)/gm;

    let result = pattern.exec(str);

    while (result !== null) {

        let name = result.groups['string'].toUpperCase();
        let number = Number(result.groups['number']);
        for (let i = 0; i < number; i++) {
            resultString += name;
        }
        result = pattern.exec(str);
    }
    if (resultString.length === 0) {
        stringUsed = "";
        console.log(`Unique symbols used: ${stringUsed.length}`);
    } else {
        console.log(`Unique symbols used: ${stringUsed.length}`);
    }

    console.log(`${resultString}`);
}
rageQuit(['e-!btI17z=E:DMJ19U1Tvg VQ>11P"qCmo.-0YHYu~o%/%b.}a[=d15fz^"{0^/pg.Ft{W12`aD<l&$W&)*yF1WLV9_GmTf(d0($!$`e/{D\'xi]-~17 *%p"%|N>zq@ %xBD18<Y(fHh`@gu#Z#p"Z<v13fI]\':\\Iz.17*W:\\mwV`z-15g@hUYE{_$~}+X%*nytkW15']);
// rageQuit(['aSd2&5s@1']);