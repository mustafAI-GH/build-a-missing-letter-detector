function fearNotLetter(str) {

    let startCode = str.charCodeAt(0);

    for (let i = 0; i < str.length; i++) {

        let currentCode = str.charCodeAt(i);

        if (currentCode !== startCode + i) {

            return String.fromCharCode(startCode + i);
        }
    }

    return undefined;
}


console.log(fearNotLetter("abce"));
console.log(fearNotLetter("abcdefghjklmno"));
console.log(fearNotLetter("bcdf"));
console.log(fearNotLetter("abcdefghijklmnopqrstuvwxyz"));
