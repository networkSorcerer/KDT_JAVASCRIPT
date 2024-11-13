// 배열에서 사용할수 있는 속성과 메서드 활용하기
// 배열의 메서드는 크게 파괴적 메서드와 비파괴적 메서드가 있음
//(비파괴적 메서드는 불변성의 원칙과 관련이 있음 )

const arr = [10, 20, 30, 40, 50];
// 배열을 순회하는 비파괴적 메서드를 사용 (원본값을 안바꿈, 범위지정안되고 전부 반복)
arr.forEach((e) => {
  e += 100;
  console.log(e);
});
for (let i = 0; i < arr.length; i++) {
  //원본값 바뀜 , 범위 지정 이나 순환을 변경할수 있음 ex)break;
  console.log(arr[i]);
}

for (let e of arr) {
  console.log(e);
}
