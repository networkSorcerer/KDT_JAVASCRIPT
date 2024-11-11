let Max = 0;
let Min = 0;

const firstNumber = Number(prompt("첫번째 수를 입력하세요"));
const secondNumber = Number(prompt("두번째 수를 입력하세요"));
const thirdNumber = Number(prompt("세번째 수를 입력하세요"));

if (firstNumber > secondNumber && firstNumber > thirdNumber) {
  Max = firstNumber;
  Min = secondNumber > thirdNumber ? thirdNumber : secondNumber;
} else if (secondNumber > thirdNumber && secondNumber > firstNumber) {
  Max = secondNumber;
  Min = firstNumber > thirdNumber ? thirdNumber : firstNumber;
} else {
  Max = thirdNumber;
  Min = firstNumber > secondNumber ? secondNumber : firstNumber;
}

document.write("<h3>제일 큰 값 : " + Max + "</h3>");
document.write("<h3>제일 작은 값 : " + Min + "</h3>");

//max = Math.max(a,b,c);
//min = Math.min(a,b,c);
