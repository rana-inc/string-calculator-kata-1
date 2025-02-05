export const add = (numbers: string): number => {
  if (numbers.length === 0) return 0;

  const regex = new RegExp(`,|\\n`);
  const numbersArr = numbers.split(regex);

  const sum = numbersArr.reduce((prevValue, currentValue) => {
    return prevValue + parseInt(currentValue);
  }, 0);

  return sum;
};
