const GetVersion = () => {
  return `v${require('../package.json').version}`
}
export default GetVersion
