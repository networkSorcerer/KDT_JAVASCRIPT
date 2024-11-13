// 배열에서 사용할수 있는 속성과 메서드 활용하기
// 배열의 메서드는 크게 파괴적 메서드와 비파괴적 메서드가 있음
//(비파괴적 메서드는 불변성의 원칙과 관련이 있음 )

const arr = [10, 20, 30, 40, 50];
// 배열을 순회하는 비파괴적 메서드를 사용 (원본값을 안바꿈, 범위지정안되고 전부 반복)
arr.forEach((e) => {
  e += 100;
  console.log(e);
});
for (let i = 0; i < arr.length; i++) {
  //원본값 바뀜 , 범위 지정 이나 순환을 변경할수 있음 ex)break;
  console.log(arr[i]);
}

for (let e of arr) {
  console.log(e);
}

// toString() : 배열안의 모든 문자열을 쉼표를 이용해 모두 결합해 하나의 문자열로 반환
console.log(arr.toString());

// join( ) : 배열안의 모든 문자열을 지정한 문자를 이용해 모두 결합
const fruits = ["Apple", "Banana", "Orange", "Kiwi", "Mango"];
console.log(fruits.join("*"));

// pop() : 스택 자료 구조에서 마지막 데이터를 제거하고, 반환, 배열의 내용이 변경됨으로 파괴적 메서드
console.log(fruits.pop());
// push() : 배열에 새로운 요소를 추가
fruits.push;
("Watermelon");
console.log(fruits);

// shift() : 배열에서 첫번째 요소를 제거하고, 반환
console.log(fruits.shift());
console.log(fruits);

// 배열 요소의 변경
fruits[3] = "Peach";
console.log(fruits);

// concat() : 2개 이상의 배열을 하나의 배열로 결합 (비파괴적인 메서드)
const arrCar = ["코나", "아반떼", "소나타"];
const arrCar2 = ["싼타페", "그렌저", "캐스퍼"];

// Using concat
const newCar = arrCar.concat(arrCar2, "GV70");
console.log(newCar);

// Using spread operator
const newCar2 = [...arrCar, ...arrCar2, "GV80"];
console.log(newCar2);

// slice():
const newCar3 = newCar2.slice(3);
console.log(newCar3);
console.log(newCar3.sort());

// filter() : 배열에서 특정 조건을 만족하는 배열의 요소만 찾아서 새로운 배열을 반환
const persons = [
  {
    name: "유재석",
    point: 78,
    city: "서울",
  },
  {
    name: "김종국",
    point: 92,
    city: "안양",
  },
  {
    name: "양세찬",
    point: 76,
    city: "구리",
  },
  {
    name: "하하",
    point: 81,
    city: "인천",
  },
];

const pass = persons.filter((e) => e.point > 80);
console.log(pass);

// map() : 배열의 각요소를 반환하고, 그 결과로 새로운 배열을 반환하는 메서드
const numbers = [1, 2, 3, 4, 5];
const squareN = numbers.map((e) => e * e); // 제곱한 결과를 반환
console.log(squareN);
