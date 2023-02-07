import { Router } from "express"
import passport from "passport"

const router = Router()

router.get("/protected",passport.authenticate('jwt', {session: false} ) ,(req, res) => {
  res.send("Protected route")
})

export default router