import { getConnection } from 'typeorm'
import { injectable } from 'inversify'

import { IDao } from './interfaces'
import { Url } from './entity'

@injectable()
export class Repository implements IDao {
  save({ long, short }: { long: string; short: string }): Promise<Url> {
    const urlRepository = getConnection().getRepository(Url)
    return urlRepository.save({ long, short })
  }

  findOne(shortId: string): Promise<Url | undefined> {
    const urlRepository = getConnection().getRepository(Url)
    return urlRepository.findOne({ short: shortId })
  }

  getShortUrl(long: string): Promise<Url | undefined> {
    const urlRepository = getConnection().getRepository(Url)
    return urlRepository.findOne({ long })
  }
}
