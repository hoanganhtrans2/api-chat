const express = require("express");
const app = express();
var router = express.Router();
var chatController = require("../controller/chat.controller");

router.post("/getRoom", chatController.getRomChat);
router.post("/getMessageFromRoom", chatController.getMessageFromRoom);
router.post("/putMessage", chatController.putMessage);

module.exports = router;
