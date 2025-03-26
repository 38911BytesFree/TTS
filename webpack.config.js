const path = require("path");

module.exports = {
    mode: "production",
    entry: {
        background: "./src/background.ts", // Background script entry
    },
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "[name].js", // Produces background.js in dist
    },
    resolve: {
        extensions: [".ts", ".js"],
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
