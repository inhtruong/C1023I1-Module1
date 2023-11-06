function rangeOfNumbers(startNum, endNum) {
  if (startNum === endNum) {
    return [startNum];
  }

  const arr = rangeOfNumbers(startNum + 1, endNum);
  arr.unshift(startNum);
  console.log(arr);
  return arr;
}
rangeOfNumbers(1, 5);