
const express = require("express")
const router = express.Router()
//controller load
const { getItems, getItem, createItem} = require("../controllers/tracks")
//validator load 
const { validatorCreateItem } = require("../validators/tracks")
//controller links
router.get("/", getItems)
router.get("/:id", getItem)
//validator link
router.post("/", validatorCreateItem, createItem)

module.exports = router