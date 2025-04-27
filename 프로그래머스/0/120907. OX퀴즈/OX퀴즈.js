function solution(quiz) {
    const answer = [];

    quiz.forEach((q) => {
        const [num1, operator, num2, , result] = q.split(" ");

        let calc = 0;
        if (operator === "+") {
            calc = Number(num1) + Number(num2);
        } else if (operator === "-") {
            calc = Number(num1) - Number(num2);
        }

        if (calc === Number(result)) {
            answer.push("O");
        } else {
            answer.push("X");
        }
    });

    return answer;
}
