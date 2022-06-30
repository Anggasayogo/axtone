const { print } = require("gluegun/print")

const { cyan, gray, white, bold, red, yellow } = print.colors

const infomark = (
"         _____   ___\n"+
`        /     + /  /   | ${bold(red("Welcome To Axtone Boilerplaten 🔥"))} \n`+
`       /  / +  /  /    | ${cyan("The Expressive Boilerplate For React Native")} \n`+
"      /  /   +/  +     | \n"+
"     /  /____/  / +    | Github : https://github.com/Anggasayogo/axtone\n"+
"    /  _____/  /+  +   | Issue  : https://github.com/Anggasayogo/axtone/issues\n"+
"   /  /    /  /  +  +  | \n");

const comadList = (
    `Example : ${yellow('axtone g conatiner HomeContainer')} For Generating Conatiner \n`+
    `- axtone g conatiner => Generating your container\n`+
    `- axtone g atome => Generating your Atome Components\n`+
    `- axtone g molecule => Generating your Molecule Components\n`+
    `- axtone g organizm => Generating your Organizm Components\n`+
    `- axtone g redux => Generating Redux State\n`+
    `- axtone g sagas => Generating Saga Midleware\n`
);

const axtoneMark = () => {
    return infomark;
}

const axtoneComandList = () => {
    return comadList
}

const command = (m = "", second = "", examples = []) => {
  p(white(m) + "  " + gray(second))
  const indent = m.length + 2
  if (examples) {
    examples.forEach((ex) => p(gray(" ".repeat(indent) + ex)))
  }
}

const textWarning = (m = "") => p(yellow(m))
const textInfo = (m = "") => p(gray(m))
const textWhite = (m = "") => p(white(m))

module.exports = {
  axtoneMark,
  axtoneComandList,
  command,
  textWarning,
  textInfo,
  textWhite
}