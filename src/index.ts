import TwoFactorAuthentication from './model/2FA'
import SecretKey from './model/SecretKey'

const _2FA = new TwoFactorAuthentication(new SecretKey('30cda297ae57'))

console.log(_2FA.generateOTP(new Date(1698464402167)))
console.log(_2FA.generateOTP(new Date(1698464402167)))
console.log(_2FA.generateOTP(new Date(1698464403167)))
console.log(_2FA.isValidOTP('166582', new Date(1698464402167)))
console.log(_2FA.isValidOTP('166582', new Date(1698464403167)))
