function solution(num_list) {
    let hnum = num_list.filter((num) => num % 2 !== 0).join("")
    let jnum = num_list.filter((num) => num % 2 === 0).join("")
    
    return Number(hnum) + Number(jnum);
}