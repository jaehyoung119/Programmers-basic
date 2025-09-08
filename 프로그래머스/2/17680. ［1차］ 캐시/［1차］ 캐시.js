function solution(cacheSize, cities) {
    if (cacheSize === 0) return cities.length * 5; // ✅ 꼭 넣기

    let time = 0;
    let cache = [];

    for (let city of cities) {
        city = city.toLowerCase(); // ✅ 대소문자 무시

        const index = cache.indexOf(city);

        if (index !== -1) {
            // 캐시 히트
            cache.splice(index, 1);
            time += 1;
        } else {
            // 캐시 미스
            time += 5;
            if (cache.length >= cacheSize) {
                cache.shift(); // 가장 오래된 제거
            }
        }

        cache.push(city); // 최근 사용으로 등록
    }

    return time;
}
