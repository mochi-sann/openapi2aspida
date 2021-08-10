const help = () => {
  return `
  Version : ${JSON.stringify(require('../package.json').version)}

  Usage:
    npx openapi2aspida [options] [command]

  Options:
    -h,--help       output usage information
    -v,--version    output the version number
    -i,--input      input OpenAPI file
    -c,--config     set configs

  Examples:
    npx openapi2aspida -i https://petstore.swagger.io/v2/swagger.json

  documentPage:
    https://github.com/aspida/openapi2aspida
`
}

export default help
