const fn = require("./fn");

// expect : 검증해야하는 값 , toBe : 테스트해야하는 값
test("1은 1이야", () => {
  expect(1).toBe(1);
});

// 성공 케이스
test("2더하기 3은 5야", () => {
  expect(fn.add(2, 3)).toBe(5);
});

// 실패 케이스
test("3 더하기 3은 5야", () => {
  expect(fn.add(3, 3)).toBe(5);
});

// not 활용 케이스
test("3 더하기 3은 5가 아니야", () => {
  expect(fn.add(3, 3)).not.toBe(5);
});
