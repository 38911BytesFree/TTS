# Text-to-Speech (TTS) Chrome Extension

This is a Chrome extension that provides text-to-speech (TTS) functionality. It allows users to select text on a webpage and have it read aloud using the Speech Synthesis API. The extension automatically detects the language of the selected text and uses the appropriate language for speech synthesis.

## Features

- **Read Selected Text**: Right-click on selected text to get an option to read it aloud.
- **Stop Reading**: Stop the speech synthesis with a click of a button.
- **Language Detection**: Automatically detects the language of the text and uses the appropriate voice for speech synthesis using the `franc-min` library.
  
## Installation

1. **Clone the Repository**:

   ```bash
   git clone https://github.com/yourusername/tts-extension.git
   cd tts-extension
   ```

2. **Install Dependencies**:

   The project uses `npm` to manage dependencies. Install them using:

   ```bash
   npm install
   ```

3. **Build the Project**:

   Use the following command to build the project:

   ```bash
   npm run build
   ```

4. **Package the Extension**:

   To package the extension into a zip file for installation in Chrome, run:

   ```bash
   npm run zip
   ```

   This will create a zip file (`tts.zip`) that you can load as an unpacked extension in Chrome.

5. **Load the Extension in Chrome**:

   - Open `chrome://extensions/` in your browser.
   - Enable **Developer Mode** (top right).
   - Click **Load unpacked** and select the extension's root directory or the `tts.zip` file.

6. **Test the Extension**:

   Select some text on any webpage, right-click to bring up the context menu, and select "🔊 Read Text" to hear the selected text aloud. The language will be detected and used for speech synthesis. You can stop the speech by selecting "🔊 Stop Reading."

### Dependencies
- **`franc-min`**: This library is used to detect the language of the selected text.
- **`@types/chrome`**: Provides type definitions for Chrome extensions.
- **`webpack`**: Used for bundling the extension.
- **`bestzip`**: Used to create the zip file for packaging the extension.

### Build and Zip Scripts
- **`npm run build`**: Runs `webpack` to bundle the extension.
- **`npm run zip`**: Uses `bestzip` to package the extension files into a zip file (`tts.zip`).

## Development

### 1. **Building the Extension**

To build the project using webpack, use the following command:

```bash
npm run build
```

This will bundle all the necessary files into the `dist` directory.

### 2. **Packaging the Extension**

Once the extension is built, you can create a zip file ready for Chrome by running:

```bash
npm run zip
```

This will generate a `tts.zip` file, which can be loaded into Chrome as an unpacked extension.

## License

This project is licensed under the MIT License.

```

### Summary of `package.json` Configuration

- **Dependencies**: 
  - `franc-min`: For language detection.
  - `@types/chrome`: Type definitions for Chrome APIs.
- **Development Dependencies**: 
  - `webpack` and `ts-loader`: For bundling TypeScript files.
  - `bestzip`: For zipping the required files into the `tts.zip` extension package.
- **Scripts**: 
  - `build`: Compiles the extension files.
  - `zip`: Packages the compiled extension files into a zip file for distribution.
