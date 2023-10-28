import SecretKey from './SecretKey'

export default class TwoFactorAuthentication {
  constructor(private readonly secretKey: SecretKey) {}

  generateOTP(date: Date): string {
    const hash = Bun.hash.wyhash(
      this.secretKey.value + ':' + this.getTimestamp(date),
    )
    const otp = hash.toString().slice(0, 6)
    return otp
  }

  getTimestamp(date: Date): string {
    const time = date.getTime().toString()
    const timeAtStartOfMinute = time.slice(time.length - 4) + '0000'
    return timeAtStartOfMinute
  }

  isValidOTP(otp: string, date = new Date()): boolean {
    return otp === this.generateOTP(date)
  }
}
