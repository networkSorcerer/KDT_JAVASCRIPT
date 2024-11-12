// 함수는 특정 작업을 반복하거나 재사용할수 있도록 작성된 코드블록
// 복잡한 작업을 쉽게 처리할수 있고 코드의 재사용성을 높여 줌

// 함수 선언과 호출 : function 키워드 사용, 반드시 호출해야 동작,
//  호이스팅 적용(함수의 선언부가 자동으로 최상단으로 이동 함)
// 함수의 이름은 소문자로 작성, 호출시 전달된 인수는 함수의 매개변수로 전달됨
console.log(sum(100, 200));

function sum(a, b) {
  return a + b;
}

// 함수 표현식 : 변수에 함수를 할당해서 사용하는 방식
// 함수 표현식은 익명의 함수와 네이밍 함수 방식이 있음
// 주로 익명의 함수로 사용해야 할때 사용, 호이스팅 적용되지 않음
const multiply = function (a, b) {
  return a * b;
};
console.log(multiply(100, 200));

// 함수 표현식을 화살표 함수로 만드는 방식 (ES6에서 포함)
// 화살표 함수는 함수 표현식을 간결하게 작성할때 사용하는 방식
const divide = (a, b) => a / b;
console.log(divide(10, 2));

function TestFunc() {
  this.value = 10;
  // 화살표 함수의 this는 자기자신은 별도의 값을 가지지 않고 상속받은 값으로 사용
  const arrowFunc = () => {
    console.log(this.value);
  };
  // 호출 될때 동적 바인딩이 일어남. 즉 , 호출 될때 의 위치에 따라 this 값이 결정됨
  const tradFunc = function () {
    console.log(this.value);
  };
  arrowFunc();
  tradFunc();
}
new TestFunc();

// 기본값 할당
function add(a, b = 10, c = 20) {
  return a + b + c;
}

console.log(add(1));

// 스코프 : 자바스크립트는 함수 스코프와 블록 스코프 방식으로 나누어짐
// 함수 스코프 : 함수에서 정의 한 블록문만 스코프의 유효범위로 인식하는 방식
let a = 10; // 전역변수
function sum2() {
  console.log(`함수 내부 : ${a}`);
}
sum2();
console.log(`함수 외부 : ${a}`);
