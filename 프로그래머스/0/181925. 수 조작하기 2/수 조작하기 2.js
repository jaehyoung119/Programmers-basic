function solution(numLog) {
   let result = [];
   for(let i = 1; i <= numLog.length; i++) {
       switch(numLog[i] - numLog[i-1]) {
           case 1 : result.push("w")
               break;
           case -1 : result.push("s")
               break;
           case 10 : result.push("d")
               break;
           case -10 : result.push("a")
               break;
       }
   }
   return result.join("");
}