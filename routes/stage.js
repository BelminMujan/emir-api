const express = require("express");
const stageController = require("../controllers/stage");
const router = express.Router();

router.get("/", stageController.getStages);
router.get("/:id", stageController.getStage);
router.get("/:id/actions", stageController.getStageActions);
router.post("/", stageController.addStage);
router.delete("/:id", stageController.deleteStage);
router.patch("/:id", stageController.updateStage);
module.exports = router;
