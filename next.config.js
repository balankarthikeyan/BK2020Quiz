const withTypescript = require('@zeit/next-typescript')
const typescriptOptions = withTypescript({})

module.exports = {
  target: 'serverless',
  ...typescriptOptions,
}
