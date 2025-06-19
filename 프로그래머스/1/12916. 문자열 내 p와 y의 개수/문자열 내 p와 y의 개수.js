function solution(s){
    let str = s.toLowerCase();
    
    let pNum = 0;
    let yNum = 0;
    
    for(let char of str) {
        if(char === "p") {
            pNum += 1
        } else if(char === "y") {
            yNum += 1
        }
    }
    
    if(pNum !== yNum) {
        return false;
    } else {
        return true;
    }
}