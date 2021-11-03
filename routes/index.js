var express = require("express");
const exportUser = require("../Controller/User");

var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

router.get("/downloadExcel", exportUser);

module.exports = router;
