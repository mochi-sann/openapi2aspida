const help = () => {
  return `
  Usage:
    npx openapi2aspida [options] [command]

  Options:
    -h,--help       output usage information
    -v,--version    output the version number
    -i,--input      input OpenAPI file
    -c,--config     set configs

  Examples:
    npx openapi2aspida -i https://petstore.swagger.io/v2/swagger.json
`
}

export default help
