let jumin = null;
while (true) {
  jumin = prompt("주민등록번호 : ", ""); // 020222-3164414
  if (jumin.length != 14 || jumin.indexOf("-") == -1) {
    alert("입력 오류 ");
  }
  break;
}

const genderCode = jumin.charAt(7);
const birthYearPrefix = genderCode === "1" || genderCode === "2" ? "19" : "20";
const birthYear = Number(birthYearPrefix + jumin.substring(0, 2));
const currentYear = new Date().getFullYear();
const age = currentYear - birthYear;
const genderStr = genderCode === "1" || genderCode === "3" ? "남성" : "여성";

document.write(`<p class ='box'>성별 : ${genderStr} <br/> 나이 : ${age} </p>`);

// 주민등록번호를 입력 받아 성별, 나이, 출력하기 (웹에 출력하기)
// 문자열을 자르는 함수는 jumin.substring(0, 2) // 문자열에서 0번쨰에서 2번 인덱스 미만까지 자름
// 문자열에서 해당 인덱스의 문자를 추출 jumin.charAt(5); //  문자열에서 5번 인덱스의 문자 추출
// const date = new Date();
// date.getFullYear(); // 2024
// 주민등록번호 입력 오류 체크하기 (길이 체크, "-" 포함 여부 확인 )
// 특정 문자열 포함여부 확인은 indexOf("-") 사용
// let socialNumber = [prompt("주민번호를 입력하세욧!!!!!")];
// //000805-3498531
// if (socialNumber.length !== 14 && socialNumber[0][7] !== "-") {
//   alert("올바른 생년월일을 입력하세욧!!!!!!!");
// } else {
// }
// let birthYear = parseInt(socialNumber[0][0] + socialNumber[0][1]);
// let genderCheck = parseInt(socialNumber[0][7]);
// document.write("genderCheck에 뭐 들어가니? : " + genderCheck + "<br/>");
// if ((genderCheck = 1 || 3)) {
//   document.write("성별 :  남자 <br/>");
// } else {
//   document.write("성별 : 여자<br/>");
// }
// document.write("주민번호 : " + socialNumber + "<br/>");
// document.write("생년 확인 :  " + birthYear + "<br/>");
// document.write("genderCheck에 뭐 들어가니? : " + genderCheck + "<br/>");
// if ((genderCheck = 1 || 2)) {
//   birthYear += 1900;
// } else {
//   birthYear += 2000;
// }
// document.write("생년 YYYY 확인 : " + birthYear + "<br/>");
// let age = 2024 - birthYear;
// document.write("당신의 나이는 : " + age + "<br/>");

// let socialNumber = prompt("주민번호를 입력하세요 (예: 000805-3498531):");
// const date = new Date();
// const currentYear = date.getFullYear();

// // 입력된 주민번호 유효성 검사
// if (socialNumber.length !== 14 || socialNumber.indexOf("-") !== 6) {
//   alert("올바른 형식으로 주민번호를 입력해주세요!");
// } else {
//   // 생년 추출 및 계산
//   let birthYear = parseInt(socialNumber.substring(0, 2), 10);
//   let genderCheck = parseInt(socialNumber.charAt(7), 10);

//   // 1900년대생인지 2000년대생인지 판별
//   if (genderCheck === 1 || genderCheck === 2) {
//     birthYear += 1900;
//   } else if (genderCheck === 3 || genderCheck === 4) {
//     birthYear += 2000;
//   }

//   // 성별 판별
//   let gender = (genderCheck === 1 || genderCheck === 3) ? "남자" : "여자";

//   // 나이 계산
//   let age = currentYear - birthYear;

//   // 결과 출력
//   document.write("주민번호 : " + socialNumber + "<br>");
//   document.write("성별 : " + gender + "<br>");
//   document.write("출생년도 : " + birthYear + "<br>");
//   document.write("당신의 나이는 : " + age + "세<br>");
// }
