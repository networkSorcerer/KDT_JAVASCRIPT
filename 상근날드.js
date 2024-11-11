// - prompt로 연속해서 햄버거 3개 가격과 음료 2개의 가격을 입력 받음
// - 햄버거 3개 중 가장 싼 가격을 선택하고 음료둘 중 싼 음료의 가격을 합산하고 여기서 50원 할인
// - 결과를 웹화면에 이쁘게 출력
// - 번외 : input 태그로 변경해보기

let menu = [];

menu[0] = Number(prompt("1. 불고기버거 : ", ""));
menu[1] = Number(prompt("1. 스택버거 : ", ""));
menu[2] = Number(prompt("1. 와플버거 : ", ""));
menu[3] = Number(prompt("1. 콜라 : ", ""));
menu[4] = Number(prompt("1. 사이다 : ", ""));

let minBerger = menu[0];
let minDrink = menu[3];

for (let i = 0; i <= menu.length; i++) {
  if (i < 3 && minBerger > menu[i]) minBerger = menu[i];
  if (i > 2 && minDrink > menu[i]) minDrink = menu[i];
}
document.getElementById("value").innerHTML = minBerger + minDrink - 50 + "원";
