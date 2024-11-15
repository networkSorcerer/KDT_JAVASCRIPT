// 정규표현식 : 특정 패턴을 정의해 문자열ㅇ르 검색, 대체, 추출하는데 사용
// 정규 표현식 생성 방법 : 리터럴 방식, RegExp객체 사용 방식

const regex = /World/; // 리터럴 방식을 많이 사용함
let inputStr = "Hello World~~~~~~~";
console.log(regex.test(inputStr)); // test() : 해당 문자열이 포함되어 있으면 true, 없으면 false반환

const result = /가장+/.exec("가장 큰 실수는 포기입니다");
console.log(result); // ["가장"]

const inputText = "010-5006-4146 sdfsdfsf  010-9027-7477 dfadfsdf 011-123-1234";
const regNumber = inputText.match(/\d{3}-\d{3,4}-\d{4}/g);
console.log(regNumber); // "010-5006-4146"
