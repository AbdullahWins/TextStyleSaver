# Assalamualaikum! Presenting TextStyleSaver!

[![npm version](https://badge.fury.io/js/TextStyleSaver.svg)](https://badge.fury.io/js/TextStyleSaver)

A lightweight Markdown to HTML parser without external dependencies.

## Installation

To install the Markdown Parser package, use npm:

```bash
npm install TextStyleSaver
```

````

## Usage

```javascript
const { TextStyleSaver } = require("TextStyleSaver");

const text = "# Hello, **Markdown**!";
const processedText = TextStyleSaver(text);
console.log(processedText);
```

The `TextStyleSaver` function accepts a Markdown string as input and returns the parsed HTML.

## Features

- Supports headings with different levels (`#`, `##`, `###`, etc.).
- Handles bold and italic formatting (`**bold**`, `*italic*`).
- Converts unordered lists (`* item`) to `<ul>` tags.
- Converts ordered lists (`1. item`) to `<ol>` tags.

## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvements, please open an issue or submit a pull request on the [GitHub repository](https://github.com/abdullahwins/textstylesaver).

## Author

Created with love by [AbdullahWins](https://github.com/AbdullahWins)

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more information.
````
