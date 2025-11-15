function solution(phone_book) {
    phone_book.sort();  // 문자열 정렬 (사전순)

    for (let i = 0; i < phone_book.length - 1; i++) {
        if (phone_book[i + 1].startsWith(phone_book[i])) {
            return false;
        }
    }

    return true;
}
