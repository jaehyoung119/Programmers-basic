function solution(my_string, alp) {
    let result = ""
    
   for(let char of my_string) {
       if(char === alp) {
           result += char.toUpperCase()
       } else {
           result += char 
       }
       
   }
    
   return result;
}