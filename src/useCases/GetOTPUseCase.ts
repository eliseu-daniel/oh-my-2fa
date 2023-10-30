import GetOTPDTO from '../DTO/GetOTPDTO'
import TwoFactorAuthentication from '../model/2FA'
import SecretKey from '../model/SecretKey'
import UseCase from './UseCase'

export default class GetOTPUseCase implements UseCase<GetOTPDTO, string> {
  execute({ date, secret }: GetOTPDTO): string {
    const secretKey = new SecretKey(secret)
    const _2FA = new TwoFactorAuthentication(secretKey)
    return _2FA.generateOTP(date)
  }
}
