const escapeRegex = (str: string) =>
  str.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");

export const add = (numbers: string): number => {
  if (numbers.length === 0) return 0;

  let numbersArr: Array<string> = [];
  const negativeNumbers: Array<string> = [];

  if (numbers.startsWith("//")) {
    const endIndex = numbers.indexOf("\n");
    const delimiter = numbers.substring(2, endIndex);
    const numStr = numbers.slice(endIndex + 1);
    const escapedDelimiter = escapeRegex(delimiter);
    const regex = new RegExp(`${escapedDelimiter}|\\n`);
    numbersArr = numStr.split(regex);
  } else {
    const regex = new RegExp(`,|\\n`);
    numbersArr = numbers.split(regex);
  }

  const sum = numbersArr.reduce((prevValue, currentValue) => {
    if (parseInt(currentValue) < 0) {
      negativeNumbers.push(currentValue);
    }
    return prevValue + parseInt(currentValue);
  }, 0);

  if (negativeNumbers.length > 0) {
    throw new Error(`Negative numbers not allowed ${[...negativeNumbers]}`);
  }
  return sum;
};
