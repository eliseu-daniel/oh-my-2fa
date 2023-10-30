import UseCase from './UseCase'
import SecretKey from '../model/SecretKey'

export default class CreateSecretKeyUseCase implements UseCase<void, string> {
  execute() {
    const secretKey = new SecretKey()
    return secretKey.value
  }
}
