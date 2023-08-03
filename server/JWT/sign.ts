import { createSecretKey } from 'crypto'
import { JWTPayload, SignJWT } from 'jose'
import Global from './../../env.js'

export const SecretKey = createSecretKey(Global.JWT_SECRET, 'utf-8')
export function customSign(payload: JWTPayload) {
  return new SignJWT(payload)
    .setProtectedHeader({ alg: 'HS256' })
    .setIssuedAt()
    .setIssuer(process.env.DOMAIN!)
    .setAudience(process.env.DOMAIN! + process.env.GRAPHQL_PATH)
    .setExpirationTime('2h')
    .sign(SecretKey)
}
