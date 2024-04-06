
import { auth } from 'express-oauth2-jwt-bearer'

const jwtCheck = auth({
  audience: process.env.Auth0_AUDIENCE,
  issuerBaseURL: process.env.Auth0_ISSUER_BASE_URL,
  tokenSigningAlg: 'RS256',
})

export default jwtCheck
