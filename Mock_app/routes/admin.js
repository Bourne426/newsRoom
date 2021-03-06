const express = require("express");
const router = express.Router();
const adminControllers = require("../controllers/admin.js");

router.get("/getNews", adminControllers.getNews);

router.post("/createPost", adminControllers.createPost);

router.get("/history", adminControllers.getHistory);


router.get("/getInterestedUsers", adminControllers.getInterestedUsers);

module.exports = router;





