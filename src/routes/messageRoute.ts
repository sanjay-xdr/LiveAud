const express = require("express");
const router = express.Router();
import { sayHello } from "../controllers/messageController";

router.get("/v1/message", sayHello);


// router.get("/v2/message", sayHellov2);


module.exports = router;
