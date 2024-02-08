const Router = require("koa-router");
const user = require("./user/get")
const router = new Router();

router.get("/user/list", user.GetUser);
router.post("/user", user.AddNewUser);

module.exports = router;