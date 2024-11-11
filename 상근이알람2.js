let hour = Number(prompt("시간 입력 : ", ""));
let min = Number(prompt("분 입력 : "));
let totalMin = hour * 60 + min;
if (totalMin < 45) totalMin = 24 * 60 + min;
totalMin -= 45;
hour = parseInt(totalMin / 60);
min = totalMin % 60;
document.write("<h2>" + `${hour} 시 ${min} 분` + "</h2>");
