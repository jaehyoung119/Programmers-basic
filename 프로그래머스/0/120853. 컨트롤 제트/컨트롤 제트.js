function solution(s) {
    const stack = [];
    
    s.split(' ').forEach((char) => {
        if (char === 'Z') {
            stack.pop();
        } else {
            stack.push(Number(char));
        }
    })
    
    return stack.reduce((a,b) => a+b, 0);
}

