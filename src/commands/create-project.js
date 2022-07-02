const { spawnProgress } = require("../utils/spawn")
module.exports = {
  run: async (toolbox) => {
    const { print: { info }, filesystem, system, meta, parameters, strings } = toolbox

    // debug
    const debug = Boolean(parameters.options.debug)
    let log = (m) => {
      if (debug) info(m)
      return m
    }
    
    const axtoneTemplatePath = filesystem?.path(`${meta?.src}`,'..');
    const generateProject = `npx react-native init ${parameters.first} --template ${axtoneTemplatePath}`;
    
    // generate the project
    await spawnProgress(log(generateProject), {
      env: '',
      onProgress: (out) => {
        info(out.toString())
      },
    })
  },
}
  