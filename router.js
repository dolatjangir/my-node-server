const Router = require("koa-router");
const user = require("./user/get")
const router = new Router();

router.get("/user/list", user.GetUser);
router.post("/user/signup", user.AddNewUser);
router.post("/user/login", user.UserLogin);

module.exports = router;