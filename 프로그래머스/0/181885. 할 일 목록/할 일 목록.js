function solution(todo_list, finished) {
    let index = [];
    let result = [];
    
    for(let i = 0; i < finished.length; i++) {
        if(!finished[i]) {
            index.push(i);
        }
    }
    
    for(let num of index) {
        result.push(todo_list[num]);
    }
    
    return result;
}