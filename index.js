function sumItems(array) {
  var sum = 0;
  array.forEach((item) => {

    if (Array.isArray(item)) {
      // Print out all it's items individually
      sum += sumItems(item);
    } else {
      sum += item;
    }

  });
  return sum;
}

module.exports = sumItems;