function solution(start_num, end_num) {
   let result = [];
   for(let i = start_num; i <= end_num; i++) {
       result.push(i);
   }
    
   let result2 = Array.from({ length : end_num - start_num + 1}, (_,i) => start_num + i)
   return result2;
}