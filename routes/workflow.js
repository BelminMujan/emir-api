const express = require("express");
const workflowController = require("../controllers/workflow");
const router = express.Router();

router.get("/", workflowController.getWorkflows);
router.get("/:id", workflowController.getWorkflow);
router.get("/:id/stages", workflowController.getWorkflowStages);
router.post("/", workflowController.addWorkflow);
router.delete("/:id", workflowController.deleteWorkflow);
router.patch("/:id", workflowController.updateWorkflow);
module.exports = router;
