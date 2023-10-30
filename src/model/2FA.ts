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
    const time = date.getTime()
    const timeAtStartOfMinute = Math.floor(time / 60000) * 60000
    const timestamp = timeAtStartOfMinute.toString()
    return timestamp
  }

  isValidOTP(otp: string, date = new Date()): boolean {
    return otp === this.generateOTP(date)
  }
}
