export const add = (numbers: string): number => {
  if (numbers.length === 0) return 0;

  const numbersArr = numbers.split(",");
  if (numbersArr.length > 1) {
    return parseInt(numbersArr[0]) + parseInt(numbersArr[1]);
  }
  return parseInt(numbers);
};
