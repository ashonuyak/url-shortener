import config from 'config'

export class InvalidUrlError extends Error {
  constructor(short: string) {
    super(`This URL: ${config.get('server.baseUrl')}/${short} does not exist.`)
  }
}
