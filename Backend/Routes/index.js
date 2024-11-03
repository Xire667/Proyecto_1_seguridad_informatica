const {Router} = require('express')
const {StudentRouter} = require('../Routes/StudentRoutes')

const router = Router()

router.use('/student', StudentRouter)

module.exports = router
