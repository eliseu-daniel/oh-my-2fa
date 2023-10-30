import { Elysia, t } from 'elysia'
import TwoFactorAuthenticationController from '../controlles/TwoFactorAuthenticationController'
import CreateSecretKeyUseCase from '../useCases/CreateSecretKeyUseCase'
import GetOTPUseCase from '../useCases/GetOTPUseCase'
import ValidateOTPUseCase from '../useCases/ValidateOTPUseCase'

const createSecretKeyUseCase = new CreateSecretKeyUseCase()
const getOTPUseCase = new GetOTPUseCase()
const validateOTPUseCase = new ValidateOTPUseCase()
const _2FAController = new TwoFactorAuthenticationController(
  createSecretKeyUseCase,
  getOTPUseCase,
  validateOTPUseCase,
)

export default class TwoFactorAuthenticationRoutes {
  create(app: Elysia) {
    return app
      .post('/secret', _2FAController.createSecretKey)
      .get('/otp/:secret', _2FAController.getOneTimePassword)
      .post('/otp/:secret', _2FAController.validateOneTimePassword, {
        body: t.Object({
          otp: t.String(),
        }),
      })
  }
}
