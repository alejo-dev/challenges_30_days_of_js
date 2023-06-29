function findLargestPalindrome(words) {
  return words.reduce((previousValue, currentValue) => {
    if (
      !previousValue &&
      currentValue.split("").reverse().join("") == currentValue
    ) {
      return currentValue;
    } else if (
      previousValue &&
      currentValue.split("").reverse().join("") == currentValue &&
      currentValue.length > previousValue.length
    ) {
      return currentValue;
    } else {
      return previousValue;
    }
  }, null);
}

document.write(
  findLargestPalindrome(["racecar", "level", "world", "reconocer", "hello"])
);
