function solution(rank, attendance) {
    let index = [];
    for (let i = 0; i < attendance.length; i++) {
        if(attendance[i]) {
            index.push({rank : rank[i], index : i});
        }
    }
    
    index.sort((a,b) => a.rank - b.rank);
    
    const [a,b,c] = [index[0].index, index[1].index, index[2].index]
    
    return 10000 * a + 100 * b + c ;
}