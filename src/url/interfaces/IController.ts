import { AppContext } from '../../app'

export interface IController {
  changeUrl: (ctx: AppContext) => Promise<void>

  getUrl: (ctx: AppContext) => Promise<void>
}
