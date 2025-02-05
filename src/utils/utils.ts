export const add = (numbers: string): number => {
  if (numbers.length === 0) return 0;
  const numbersArr = numbers.split(",");

  const sum = numbersArr.reduce((prevValue, currentValue) => {
    return prevValue + parseInt(currentValue);
  }, 0);

  return sum;
};
