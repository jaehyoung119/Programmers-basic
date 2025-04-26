function solution(numbers) {
    const numWords = ["zero", "one" , "two" , "three" , "four" , "five" , "six" , "seven" , "eight" , "nine"];
    
    numWords.forEach((word, idx) => {
        numbers = numbers.replaceAll(word, idx);
    })
    
    return Number(numbers);
}