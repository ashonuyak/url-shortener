/* eslint-disable no-empty-function */
/* eslint-disable no-useless-constructor */
import config from 'config'
import { inject, injectable } from 'inversify'
import { v4 as uuidv4 } from 'uuid'

import { TYPES } from './constants'
import { IDao, IService } from './interfaces'
import { InvalidUrlError } from './errors'

@injectable()
export class Service implements IService {
  constructor(@inject(TYPES.IDao) private readonly urlRepository: IDao) {}

  async changeUrl(long: string): Promise<string> {
    const presenceCheck = await this.urlRepository.getShortUrl(long)
    if (presenceCheck) {
      return `${config.get('server.baseUrl')}/${presenceCheck.short}`
    }
    const short = uuidv4()
    this.urlRepository.save({ long, short })
    return `${config.get('server.baseUrl')}/${short}`
  }

  async getUrl(shortId: string): Promise<string> {
    const response = await this.urlRepository.findOne(shortId)
    if (!response) {
      throw new InvalidUrlError(shortId)
    }
    return `${response.long}`
  }
}
