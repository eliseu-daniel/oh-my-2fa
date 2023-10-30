import GetOTPDTO from '../DTO/GetOTPDTO'
import ValidateOTPDTO from '../DTO/ValidateOTPDTO'
import UseCase from '../useCases/UseCase'

export default class TwoFactorAuthenticationController {
  constructor(
    private readonly createSecretKeyUseCase: UseCase<void, string>,
    private readonly getOTPUseCase: UseCase<GetOTPDTO, string>,
    private readonly validateOTPUseCase: UseCase<ValidateOTPDTO, boolean>,
  ) {}

  createSecretKey = () => {
    return this.createSecretKeyUseCase.execute()
  }

  getOneTimePassword = ({
    params: { secret },
  }: {
    params: { secret: string }
  }) => {
    const date = new Date()
    return this.getOTPUseCase.execute({ secret, date })
  }

  validateOneTimePassword = ({
    params: { secret },
    body: { otp },
  }: {
    params: { secret: string }
    body: { otp: string }
  }) => {
    const date = new Date()
    return this.validateOTPUseCase.execute({ secret, otp, date })
  }
}
