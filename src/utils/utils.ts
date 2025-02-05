export const add = (numbers: string): number => {
  if (numbers.length === 0) return 0;

  let numbersArr: Array<string> = [];

  if (numbers.startsWith("//")) {
    const endIndex = numbers.indexOf("\n");
    const delimiter = numbers.substring(2, endIndex);
    const numStr = numbers.slice(endIndex + 1);
    const regex = new RegExp(`${delimiter}|\\n`);
    numbersArr = numStr.split(regex);
  } else {
    const regex = new RegExp(`,|\\n`);
    numbersArr = numbers.split(regex);
  }

  const sum = numbersArr.reduce((prevValue, currentValue) => {
    return prevValue + parseInt(currentValue);
  }, 0);

  return sum;
};
