// - prompt로 연속해서 햄버거 3개 가격과 음료 2개의 가격을 입력 받음
// - 햄버거 3개 중 가장 싼 가격을 선택하고 음료둘 중 싼 음료의 가격을 합산하고 여기서 50원 할인
// - 결과를 웹화면에 이쁘게 출력
// - 번외 : input 태그로 변경해보기

// let menu = [];

// menu[0] = Number(prompt("1. 불고기버거 : ", ""));
// menu[1] = Number(prompt("1. 스택버거 : ", ""));
// menu[2] = Number(prompt("1. 와플버거 : ", ""));
// menu[3] = Number(prompt("1. 콜라 : ", ""));
// menu[4] = Number(prompt("1. 사이다 : ", ""));

// let minBerger = menu[0];
// let minDrink = menu[3];

// for (let i = 0; i <= menu.length; i++) {
//   if (i < 3 && minBerger > menu[i]) minBerger = menu[i];
//   if (i > 2 && minDrink > menu[i]) minDrink = menu[i];
// }
// document.getElementById("value").innerHTML = minBerger + minDrink - 50 + "원";

function getPrice() {
  console.log("getPrice Call!!!!!!");
  let menu = [];
  // 메뉴 입력 값을 배열에 저장
  for (let i = 0; i < 5; i++) {
    menu[i] = Number(document.getElementById("menu" + (i + 1)).value);
  }

  let minB = menu[0]; // 상덕버거 초기값 설정
  let minD = menu[3]; // 콜라 초기값 설정

  // 최소값을 찾는 루프
  for (let i = 0; i < menu.length; i++) {
    if (1 < 3 && minB > menu[i]) minB = menu[i];
    if (2 > i && minD > menu[i]) minD = menu[i];
  }

  // 세트 메뉴 가격 계산 후 화면에 출력
  document.getElementById("value").innerHTML = minB + minD - 50 + "원";
}
