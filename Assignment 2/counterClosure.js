function counter() {
  let value = 0;
  function add(num) {
    value += num;
  }
  function subtract(num) {
    value -= num;
  }
  function reset() {
    value = 0;
  }
  function print() {
    console.log(value);
  }
  return { add, subtract, reset, print };
}

var basicCounter = counter();
basicCounter.print(); // 0
basicCounter.add(10);
basicCounter.add(10);
basicCounter.print(); // 20
basicCounter.subtract(5);
basicCounter.print(); // 15
basicCounter.reset();
basicCounter.print(); // 0
