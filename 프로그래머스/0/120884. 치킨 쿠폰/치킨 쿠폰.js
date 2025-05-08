function solution(chicken) {
  let coupon = chicken;
  let service = 0;

  while (coupon >= 10) {
    const extra = Math.floor(coupon / 10);
    service += extra;
    coupon = extra + (coupon % 10);
  }

  return service;
}
