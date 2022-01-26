import Router from 'koa-joi-router'

const joi = Router.Joi

export class Validator {
  static changeUrl: Router.Config = {
    validate: {
      type: 'json',
      body: {
        long: joi.string().uri().max(200).required()
      }
    }
  }
}
