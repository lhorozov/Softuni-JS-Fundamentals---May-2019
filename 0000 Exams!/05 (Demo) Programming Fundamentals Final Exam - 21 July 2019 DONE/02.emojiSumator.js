//positive/negative lookahead/lookbehind
//защо се дават задачи на изпита с материал който не е засегнат на лекция?
function emojiSumator(input) {
    let str = input[0];
    let emojiCode = input[1].split(":").map(Number);
    let multiplyByTwo = false;
    let emojiArr = [];
    
    let emojiPattern = /(?<=[\s])(?<emoji>:[a-z]{4,}:)(?=[\s,.!?])/gm;
    let sum = 0;

    let result = emojiPattern.exec(str);
    
    while (result !== null) {
        
        let word = result.groups['emoji'];
        
        emojiArr.push(word);
        word = word.split("");
        word.pop();
        word.shift();
        wordToArrNums = word.map(a => a.charCodeAt(0));
        if (JSON.stringify(emojiCode) === JSON.stringify(wordToArrNums)) {
            multiplyByTwo = true;
        }
        
        let wordToOneNum = wordToArrNums.reduce((a, b)=> a + b, 0);
        sum += wordToOneNum;
        


        result = emojiPattern.exec(str);
    }
    if (multiplyByTwo) {
        sum *= 2;
    }
    if (emojiArr.length > 0) {
        // console.log(`Emojis found: ${emojiArr.join(", ")}`);
    }
    // console.log(`Total Emoji Power: ${sum}`);
    
}
// emojiSumator(['Hello I am Mark from :England: and I am :one: :seven: years old, I have a :hamster: as pet.',
//     '115:101:118:101:110']);
emojiSumator(['In the Sofia Zoo there are many animals, such as :ti ger:, :elephan:t, :monk3y:, :goriLLa:, :fox:.',
'97:101:117:114']);