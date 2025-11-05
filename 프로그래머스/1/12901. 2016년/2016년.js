function solution(a, b) {
    const days = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
    const date = new Date(2016, a - 1, b);  // 월은 0부터 시작
    return days[date.getDay()];
}
