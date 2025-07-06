function CapitalizeEachWord(text) {
  const words = text.split(" ");
  const capitalizedWords = words.map((word) => {
    if (word.length === 0) {
      return "";
    }
    return word.charAt(0).toUpperCase() + word.slice(1);
  });
  return capitalizedWords.join(" ");
}

const originalText = "this is a sample text";
const capitalizedText = CapitalizeEachWord(originalText);

export default CapitalizeEachWord;
