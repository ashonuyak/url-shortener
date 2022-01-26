import Router from 'koa-joi-router'

import { TYPES } from './constants'
import { IController } from './interfaces'
import container from './Module'
import { Validator } from './Validator'

const Controller = container.get<IController>(TYPES.IController)

const router = Router()

router.post('/', Validator.changeUrl, Controller.changeUrl)
router.get('/:shortId', Controller.getUrl)

export default router
