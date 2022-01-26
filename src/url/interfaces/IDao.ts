import { Url } from '..'

export interface IDao {
  save({ long, short }: { long: string; short: string }): Promise<Url>

  findOne(shortId: string): Promise<Url | undefined>

  getShortUrl(long: string): Promise<Url | undefined>
}
