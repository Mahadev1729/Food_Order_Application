const { TestEnvironment } = require("jest-environment-jsdom");

module.exports = {
  presets: [
    "@babel/preset-env",
    ["@babel/preset-react", { runtime: "automatic" }],
    
  ],
};
