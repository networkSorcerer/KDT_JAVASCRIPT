// 시간과 분을 입력 45분 일찍 시간이 설정되도록 변경하는 프로그램
// 시간은 24시간제로 하고 , 0시 30분 => 23시 45분
// parseint() : 문자열을 정수로 반환

let hour = parseInt(prompt("몇 시 : "));
let minute = parseInt(prompt("몇 분 : "));

// 45분을 빼기
minute -= 45;

if (minute < 0) {
  // 분이 0보다 작아지면
  minute += 60; // 60분을 더해주고
  hour -= 1; // 시간에서 1을 뺌
}

if (hour < 0) {
  // 시간이 0보다 작아지면
  hour += 24; // 24시간을 더해 23시로 바꿈
}

document.write("<h3>설정 시간 : " + hour + "시 " + (minute + 45) + "분</h3>");
document.write("<h3>알람 시간 : " + hour + "시 " + minute + "분</h3>");
