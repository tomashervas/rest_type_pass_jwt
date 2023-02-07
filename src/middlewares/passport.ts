import {Strategy, ExtractJwt, StrategyOptions} from 'passport-jwt'
import User from '../models/user'


const options = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: process.env.JWT_SECRET
}

const strategy = new Strategy(options, async (payload, done) => {
    try {
        const user = await User.findById(payload.id)
        if (!user) {
            return done(null, false)
        }
        return done(null, user)
    } catch (error) {
        console.log(error)
    }
})

export default strategy