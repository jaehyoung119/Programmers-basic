function solution(strArr) {
    const result = [];

    for (let char of strArr) {
        const len = char.length;
        result[len] = (result[len] || 0) + 1;
    }

    const filtered = result.filter(v => v !== undefined);
    
    return filtered.length > 0 ? Math.max(...filtered) : 0;  
}
