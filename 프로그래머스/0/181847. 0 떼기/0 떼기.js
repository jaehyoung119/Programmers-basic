function solution(n_str) {
    let newStr = n_str.replaceAll("0"," ");
    let trimStr = newStr.trimStart();
    let result = trimStr.replaceAll(" ","0");
    
    return result;
}