import minimist from 'minimist'
import build from '.'
import help from './help'
import getVersion from './getVersion'

export const run = (args: string[]) => {
  const argv = minimist(args, {
    boolean: ['help'],
    string: ['version', 'input', 'config'],
    alias: { v: 'version', i: 'input', c: 'config', h: 'help' }
  })

  argv.version !== undefined
    ? console.log(getVersion())
    : argv.help
    ? console.log(help())
    : argv.input
    ? build({ outputEachDir: true, openapi: { inputFile: argv.input } })
    : build(argv.config)
}
