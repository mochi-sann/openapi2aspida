import getVersion from './getVersion'

const help = () => {
  return `
  Version : ${getVersion()}

  Usage:
    npx openapi2aspida [options] [command]

  Options:
    -h,--help       output usage information
    -v,--version    output the version number
    -i,--input      input OpenAPI file
    -c,--config     aspida config file

  Examples:
    npx openapi2aspida -i https://petstore.swagger.io/v2/swagger.json

  document page:
    https://github.com/aspida/openapi2aspida
`
}

export default help
