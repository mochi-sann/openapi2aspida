import minimist from 'minimist'
import build from '.'

export const run = (args: string[]) => {
  const argv = minimist(args, {
    boolean: ['help'],
    string: ['version', 'input', 'config'],
    alias: { v: 'version', i: 'input', c: 'config', h: 'help' }
  })
  console.log(argv)

  argv.version !== undefined
    ? console.log(`v${require('../package.json').version}`)
    : argv.help
    ? console.log('helpを表示するところです')
    : argv.input
    ? build({ outputEachDir: true, openapi: { inputFile: argv.input } })
    : build(argv.config)
}
