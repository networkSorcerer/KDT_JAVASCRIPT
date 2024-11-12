// 객체 : 자바스크립트에서는 원시타입을 제외한 모든 값이 객체입니다.
// 객체는 중괄호 {} 를 사용하여 만들며, 속성과 값으로 구성
// 객체는 객체 리터럴을 사용하여 생성

const person = {
  name: "안유진",
  age: 21,
  addr: "서울시 강남구 삼성동",
  job: "아이브",
  info: function () {
    return `이름 : ${this.name}, 나이 : ${this.age}, 주소 : ${this.addr}, 직업 : ${this.job}`;
  },
};

console.log(person.name);
console.log(person["age"]);
console.log(person);
console.log(person.info());
