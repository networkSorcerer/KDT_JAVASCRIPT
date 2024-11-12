//문자열을 다루는 string 객체
const pwd = "12345678";
console.log(pwd.length); // 문자열의 길이 확인 length

// 특정 문자열의 포함여부 확인 : include("문자열"), indexOf("문자열")
// include("문자열" ) : 포함여부를 true/false
// indexOf("문자열" ) : 시작 인덱스를 반환하고 없으면 -1
const email = "test!naver.com";
if (!email.includes("@")) {
  console.log("올바른 이메일 형식이 아닙니다.");
}

const email2 = "test!naver.com";
if (email2.indexOf("@") == -1) {
  console.log("올바른 이메일 형식이 아닙니다.");
}

// lastIndexOf() : 찾고자 하는 문자열이 둘 이상 발견되면 제일 마지막에 발견된 문자열의  index반환
const email3 = "test@naver@com";
console.log(email3.lastIndexOf("@"));

// slice(): 시작위치와 종료 위치를 주면 해당 문자열을 잘라내서 반환 음수값을 줄수 있음
const fruits = "Apple, Banana, Orange";
const sliceVal = fruits.slice(-6); //  시작 인덱스, 종료 인텍스 미만 개념
console.log(sliceVal);

// substring() : 시작 위치와 종료 위치를 주면 해당 문자열을 잘라내서 반환
const fruits2 = "Apple, Banana, Orange";
const sliceVal2 = fruits2.substring(7, 13); //  시작 인덱스, 종료 인텍스 미만 개념
console.log(sliceVal2);

//replace() : 문자열 내의 문자열을 지정한 문자열로 바꾸는 함수
const names = "안유진, 이영지, 미미, 이은지, 나영석";
const newNames = names.replace("나영석", "장원영");
console.log(newNames);

const engStr = "A stitch in time saves nine";
console.log(engStr.toUpperCase());
console.log(engStr.toLowerCase());
