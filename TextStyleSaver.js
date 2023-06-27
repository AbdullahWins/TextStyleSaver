const TextStyleSaver = (text) => {
  let processedText = text;

  //replace heading tags
  processedText = processedText.replace(/^#\s(.*)$/gm, "<h1>$1</h1>");
  processedText = processedText.replace(/^##\s(.*)$/gm, "<h2>$1</h2>");
  processedText = processedText.replace(/^###\s(.*)$/gm, "<h3>$1</h3>");
  processedText = processedText.replace(/^####\s(.*)$/gm, "<h4>$1</h4>");
  processedText = processedText.replace(/^#####\s(.*)$/gm, "<h5>$1</h5>");
  processedText = processedText.replace(/^######\s(.*)$/gm, "<h6>$1</h6>");

  //replace bold and italic tags
  processedText = processedText.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>");
  processedText = processedText.replace(/\*(.*?)\*/g, "<em>$1</em>");

  //replace unordered list tags
  processedText = processedText.replace(/^\*\s(.*)$/gm, "<li>$1</li>");
  processedText = "<ul>" + processedText + "</ul>";

  //replace ordered list tags
  processedText = processedText.replace(/^\d+\.\s(.*)$/gm, "<li>$1</li>");
  processedText = "<ol>" + processedText + "</ol>";

  return processedText;
};

module.exports = processedText;
