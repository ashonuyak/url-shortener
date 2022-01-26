/* eslint-disable no-empty-function */
/* eslint-disable no-useless-constructor */
import { inject, injectable } from 'inversify'

import { AppContext } from '../app'
import { TYPES } from './constants'
import { InvalidUrlError } from './errors'
import { IController, IService } from './interfaces'

@injectable()
export class Controller implements IController {
  constructor(@inject(TYPES.IService) private readonly service: IService) {}

  changeUrl = async (ctx: AppContext): Promise<void> => {
    const { long } = ctx.request.body
    ctx.body = await this.service.changeUrl(long)
  }

  getUrl = async (ctx: AppContext): Promise<void> => {
    const { shortId } = ctx.request.params
    try {
      const longUrl = await this.service.getUrl(shortId)
      ctx.redirect(longUrl)
    } catch (err) {
      if (err instanceof InvalidUrlError) {
        ctx.throw(404, err.message)
      }
      throw err
    }
  }
}
