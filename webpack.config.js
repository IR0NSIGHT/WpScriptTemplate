const path = require("path");
const package = require("./package.json");
module.exports = {
  entry: [package.main.replace("src","compiled").replace(".ts",".js")],
  devtool: false,
  mode: "production",
  output: {
    filename: "MyScript.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
    environment: {
      // The environment supports arrow functions ('() => { ... }').
      arrowFunction: false,
      // The environment supports BigInt as literal (123n).
      bigIntLiteral: false,
      // The environment supports const and let for variable declarations.
      const: false,
      // The environment supports destructuring ('{ a, b } = obj').
      destructuring: false,
      // The environment supports an async import() function to import EcmaScript modules.
      dynamicImport: false,
      // The environment supports 'for of' iteration ('for (const x of array) { ... }').
      forOf: false,
      // The environment supports ECMAScript Module syntax to import ECMAScript modules (import ... from '...').
      module: false,
      // The environment supports optional chaining ('obj?.a' or 'obj?.()').
      optionalChaining: false,
      // The environment supports template literals.
      templateLiteral: false,
    },
  },
};
