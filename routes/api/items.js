const express = require("express");
const router = express.Router();
const itemsCtrl = require("../../controllers/api/items");

router.post("/", itemsCtrl.create);
router.delete("/:id", itemsCtrl.delete);
router.get("/", itemsCtrl.index);
router.get('/user/:userId/pantry', itemsCtrl.getPantryItems);
router.get('/user/:userId', itemsCtrl.getUserItems);
router.post('/transfer/:itemId', itemsCtrl.transferItem);

module.exports = router;