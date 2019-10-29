module.exports = function (array, level) {
  if (!level) {
    level = 0;
  }

  // Don't sort the first level.
  if (!array || level === 0) {
    return array;
  }

  return array.sort((a, b) => {
    return a.content.localeCompare(b.content);
  });
}
