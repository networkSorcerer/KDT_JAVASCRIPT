// 클로저 : 함수가 해당 함수의 스코프 외부에 있는 변수에 접근할수 있는 매커니즘
function Counter() {
  let count = 0;
  return {
    increment: function () {
      count++;
      console.log(count);
    },
    decrement: function () {
      count--;
      console.log(count);
    },
  };
}

const myCount = Counter();
myCount.increment();
myCount.increment();
myCount.decrement();
