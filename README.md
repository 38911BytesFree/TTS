To set up **Webpack** for your Chrome extension with `franc-min`, follow these steps:

---

## **1. Install Webpack and Dependencies**
First, navigate to your extension project folder and install the necessary packages:

```bash
npm init -y  # Initialize package.json if not already created
npm install --save-dev webpack webpack-cli webpack-config-single-spa-ts
npm install franc-min
```

---

## **2. Set Up Webpack Configuration**
Create a **`webpack.config.js`** file in your project root:

```javascript
const path = require("path");

module.exports = {
    mode: "production",
    entry: {
        content: "./src/content.ts", // Content script entry
        popup: "./src/popup.ts", // Popup script entry (if needed)
    },
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "[name].js", // Generates content.js and popup.js
    },
    resolve: {
        extensions: [".ts", ".js"], // Allows importing TypeScript files
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: "ts-loader",
                exclude: /node_modules/,
            },
        ],
    },
};
```

---

## **3. Organize Your File Structure**
Move your source files into a `src` folder:

```
/my-extension
  ├── src/
  │   ├── content.ts
  │   ├── popup.ts (optional)
  ├── dist/ (auto-generated by Webpack)
  ├── manifest.json
  ├── webpack.config.js
  ├── package.json
  ├── tsconfig.json (if using TypeScript)
  ├── popup.html
  ├── icon.png
```

---

## **4. Write the Content Script (`content.ts`)**
Modify `src/content.ts`:

```typescript
import { franc } from "franc-min";

function detectLanguage(text: string) {
    const lang = franc(text);
    console.log("Detected Language:", lang !== "und" ? lang : "Unknown");
}

document.addEventListener("mouseup", () => {
    const selection = window.getSelection()?.toString().trim();
    if (selection) {
        detectLanguage(selection);
    }
});
```

---

## **5. Update `manifest.json`**
Modify `manifest.json` to use Webpack’s output files:

```json
{
    "manifest_version": 3,
    "name": "Language Detector",
    "version": "1.0",
    "description": "Detects language of selected text",
    "permissions": ["activeTab", "scripting"],
    "host_permissions": ["<all_urls>"],
    "background": {
        "service_worker": "background.js"
    },
    "action": {
        "default_popup": "popup.html",
        "default_icon": "icon.png"
    },
    "content_scripts": [
        {
            "matches": ["<all_urls>"],
            "js": ["content.js"]
        }
    ]
}
```

---

## **6. Compile Your Extension**
Run Webpack to generate the final `dist/content.js` file:

```bash
npx webpack
```

If everything works correctly, your `dist/` folder should contain:

```
/dist
  ├── content.js
  ├── popup.js (if using)
```

---

## **7. Load the Extension in Chrome**
1. Open `chrome://extensions/`
2. Enable **Developer Mode** (top right).
3. Click **Load Unpacked** and select the **`dist/`** folder.
4. Test by selecting text on any webpage and checking the Console (`F12` → Console).

---

## **8. Automate Builds (Optional)**
To avoid running `npx webpack` manually, add this script to `package.json`:

```json
"scripts": {
    "build": "webpack"
}
```

Now, just run:
```bash
npm run build
```

---

### **🎯 Summary**
✅ Installed Webpack and dependencies  
✅ Created a `webpack.config.js` file  
✅ Organized `src/` for source files and `dist/` for compiled files  
✅ Updated `manifest.json` to reference the Webpack-built scripts  
✅ Ran Webpack to generate `content.js`  


Fix chrome undefined error in typescript:
npm install --save-dev @types/chrome

Typescript configuration
npm install --save-dev typescript ts-loader webpack webpack-cli @types/chrome

To load franc-min, in tsconfig.json add:
moduleResolution: "node"

For build script:
npm install --save-dev zip-cli
