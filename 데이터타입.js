//자바스크립트의 데이터 타입은 원시타입과 객체타입으로 나누어짐
// 원시 타입은 값 자체가 저장되는 방식 ; String , Number , Boolean, Undefined, Null, Symbol, BigInt
// 객체 타입은 객체의 메모리 주소를 저장하는 타입 : Object, Array, Function, ...

// 문자열 : 문자열은 길이가 16비트(2Byte) 인 문자 (UTF-16)를 나열한 상태, "", '', ``
let str = "안녕하세요. 자바스크립트 입니다.";
console.log(str);

let str2 = "문자열과" + "문자열을" + "연결 할 수 있습니다.";
console.log(str2);

// 템플릿 문자열 : ES6에서 추가된 방식
let dan = 3;
let gugu = 8;
console.log(`${dan}*${gugu} = ${dan * gugu}`);
