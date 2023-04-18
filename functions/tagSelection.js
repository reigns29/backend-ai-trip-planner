// const array = [1];

function tagSelection(arr, num) {
  const result = [];
  for (let i = 0; i < num; i++) {
    const randomIndex = Math.floor(Math.random() * arr.length);
    result.push(arr[randomIndex]);
    arr.splice(randomIndex, 1);
  }
  return result;
}

module.exports = tagSelection;
// const selectedTags = tagSelection(array, 3);
// console.log(selectedTags); // e.g. [7, 2, 9]