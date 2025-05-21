function solution(x1, x2, x3, x4) {
    let x12 = true;
    let x34 = true;
    let result = true;
    
    if(x1 || x2) {
        x12 = true
    } else {
        x12 = false
    }  
    
    if(x3 || x4) {
        x34 = true
    } else {
        x34 = false
    }
    
    if(x12 && x34) {
        result = true
    } else {
        result = false
    }
    
    return result;
}