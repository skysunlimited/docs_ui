module.exports = function (array, content) {
  // Only sort the Contracts.
  if (!array || content !== "Contracts") {
    return array;
  }

  return array.sort((a, b) => {
    return a.content.localeCompare(b.content);
  });
}
