const express = require("express");
const router = express.Router();
import { sayHello } from "../controllers/messageController";

router.get("/message", sayHello);

module.exports = router;
