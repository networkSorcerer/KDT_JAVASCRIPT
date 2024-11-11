// 자바스크립트의 조건문은 if, if ~ else , if ~else  if else , switch ~ case
// 반복문은 while, do _while,  for(초기값; 최종조건;증감값) , for ~ in (객체 반복), for ~ of
// for ~ of (이터러블 객체를 순회할때 사용)
// let day = new Date().getDay();
// switch (day) {
//   case 0:
//     console.log("일요일");
//     break;
//   case 1:
//     console.log("월요일");
//     break;
//   case 2:
//     console.log("화요일");
//     break;
//   case 3:
//     console.log("수요일");
//     break;
//   case 4:
//     console.log("목요일");
//     break;
//   case 5:
//     console.log("금요일");
//     break;
//   case 6:
//     console.log("토요일");
//     break;
//   default:
//     console.log("잘못된 요일입니다.");
// }
// console.log(`오늘은 ${day} 입니다.`);

// for (let i = 0; i < 100; i++) {
//   console.log(i);
// }

const brands = [
  "애플",
  "구글",
  "엔비디아",
  "현대자동차",
  "테슬라",
  "아마존",
  "스페이스X",
];
// 기본적인 순회 방식
for (let i = 0; i < brands.length; i++) {
  console.log(brands[i]);
}
// for ~ of : 이터러블 객체를 반복 순회
for (const e of brands) {
  console.log(e);
}
// for ~ in : 객체의 속성을 반복하는데 사용
const person = {
  name: "장원영",
  age: 20,
  addr: "서울시 강남구 역삼동",
};
for (const key in person) {
  console.log(person[key]);
}
