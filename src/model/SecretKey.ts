export default class SecretKey {
  readonly value: string

  constructor(secretKey?: string) {
    this.value = secretKey ?? Math.random().toString(16).slice(2, 14)
  }
}
