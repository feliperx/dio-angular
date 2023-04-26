(function multiplicationTable() {
  for (let firstLoopIndex = 1; firstLoopIndex < 10; firstLoopIndex++) {
    for (let secondLoopIndex = 1; secondLoopIndex < 10; secondLoopIndex++) {
      console.log(
        firstLoopIndex +
          " x " +
          secondLoopIndex +
          " = " +
          firstLoopIndex * secondLoopIndex
      );
    }
  }
})();
