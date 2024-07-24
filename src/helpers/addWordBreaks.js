export const addWordBreaks = (str, maxLength = 10) => {
    if (str.includes("-")) return str;
    const words = str.split(" ");
    const newWords = [];
    words.forEach(function (word) {
        if (word.length > maxLength) {
            const firstWord = word.substr(0, maxLength);
            const endWord = word.substr(maxLength, word.length - 1);
            newWords.push(firstWord + "- \n");
            newWords.push(endWord);
        } else {
            newWords.push(word);
        }
    });
    return newWords.join(" ");
};
