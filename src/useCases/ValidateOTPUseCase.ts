import ValidateOTPDTO from '../DTO/ValidateOTPDTO'
import TwoFactorAuthentication from '../model/2FA'
import SecretKey from '../model/SecretKey'
import UseCase from './UseCase'

export default class ValidateOTPUseCase
  implements UseCase<ValidateOTPDTO, boolean>
{
  execute({ date, otp, secret }: ValidateOTPDTO): boolean {
    const secretKey = new SecretKey(secret)
    const _2FA = new TwoFactorAuthentication(secretKey)
    return _2FA.isValidOTP(otp, date)
  }
}
