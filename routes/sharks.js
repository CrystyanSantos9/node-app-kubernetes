const express = require("express");
const router = express.Router();

const sharkController = require("../controllers/sharks");

//ligando rotas com controllers
router.get("/", function (req, res) {
    sharkController.index(req, res);
});
router.post("/addshark", function (req, res) {
    sharkController.create(req, res);
});
router.get("/getshark", function (req, res) {
    sharkController.list(req, res);
});


module.exports = router;