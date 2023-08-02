import { jwtVerify } from 'jose'
import { SecretKey } from './sign.js'

export async function customVerify(
  signToken: string,
): Promise<string | { [key: string]: unknown } | null> {
  try {
    const { payload, protectedHeader } = await jwtVerify(signToken, SecretKey, {
      issuer: process.env.DOMAIN,
      audience: process.env.DOMAIN! + process.env.GRAPHQL_PATH,
    })
    return payload
  } catch (error) {
    return null
  }
}