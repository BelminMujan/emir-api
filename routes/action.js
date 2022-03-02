const express = require("express");
const actionController = require("../controllers/action");
const router = express.Router();

router.get("/", actionController.getActions);
router.get("/:id", actionController.getAction);
router.post("/", actionController.addAction);
router.delete("/:id", actionController.deleteAction);
router.patch("/:id", actionController.updateAction);
module.exports = router;
