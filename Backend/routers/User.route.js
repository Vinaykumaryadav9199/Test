const {UserRegistration} = require("../controllers/User.controller.js")
const {Router} = require("express")
const router = Router();

router.post("/registration/api/v1" , UserRegistration)


module.exports = router;