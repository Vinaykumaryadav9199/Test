const {UserRegistration} = require("../controllers/User.controller.js")
const {Router} = require("express")
const upload = require("../middelware/Uploadfile.js")
const router = Router();

router.post("/registration/api/v1" ,upload.single("avatar"), UserRegistration)

module.exports = router;