function solution(numbers, target) {
    let answer = 0;

    function dfs(index, sum) {
        // 모든 숫자를 사용한 경우
        if (index === numbers.length) {
            if (sum === target) answer++;
            return;
        }

        // 현재 숫자에 + / - 를 붙여 다음 단계로
        dfs(index + 1, sum + numbers[index]);
        dfs(index + 1, sum - numbers[index]);
    }

    dfs(0, 0); // index 0부터 시작, 초기 sum은 0
    return answer;
}
