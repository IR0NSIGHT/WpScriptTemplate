const packageFile = require('../package.json');
const outFile = `dist/${packageFile.name.replace(/ /g,"_")}_v${packageFile.version.replace(/\./g,"_")}.js`;
console.log(outFile)