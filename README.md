# Worldpainter Script Template

A repo template to use for developing WorldPainter scripts in typescript.
includes:
- typescript to ecma5.1 (worldpainter script standard)
- automated deploying releases to github when pushing a new tag
- automated unit tests on github
- npm scripts for compiling, building, testing, and deploying

downloads: https://github.com/IR0NSIGHT/WpScriptTemplate/releases
github:https://github.com/IR0NSIGHT/WpScriptTemplate

# Developement
This is a typescript project. It compiles to a single-file ecma5.1 script.
I have provided type declarations in the global.d.ts for the objects that worldpainter provides.
The dimension and world2 interfaces are partly AI generated, so dont rely on them being 100% correct.

You can (if you really feel like self harm) write your project directly in JS.
for that, get rid of the tsc compile step in the package.json, and write your code in "compiled"
webpack will then bundle your code into a single file.

But in this world of today,noone should be writing JS directly anymore. We are not caveman after all.

# Deploying
You need to correctly set these values in the package.json file for the build scripts to work:
```js
{
    "name": "WpScriptTemplate", //should not contain special characters or spaces that break filepaths
    "version": "1.0.1",
    "description": "a template repo to develop worldpainter scripts in typescript",
    "main": "./src/index.ts", // MUST point to your entry file
}
```

with these values, the project will build into the dist/WpScriptTemplate_v1_0_1.js file

```npm run build```
Will build the project as myName_vMyVersion.js in the dist folder

```npm run artifact```
Will create a zip file of the dist folder as myName_vMyVersion.zip in the dist folder

```npm version <major|minor|patch> -m "bump %s, added cool new feature"```
Will bump the version in package.json and create a git tag. This will trigger a github action to build a release when pushed with git push --tag