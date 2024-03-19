
const express = require("express")
const router = express.Router()
//controller load
const { getItems, getItem, createItem, updateItem, deleteItem} = require("../controllers/tracks")
//validator load 
const { validatorCreateItem,validatorGetItem } = require("../validators/tracks")
//API CUSTOM VALIDATOR
const customHeader = require("../middleware/customHeader")
const authMiddleware = require("../middleware/session")
const checkRol = require("../middleware/rol")
//controller links
router.get("/",authMiddleware ,getItems)
//para un solo item
router.get("/:id",validatorGetItem, getItem)
//validator link + customheader api validator
//router.post("/", authMiddleware,checkRol(["admin"]),validatorCreateItem, createItem)
router.post("/",validatorCreateItem, createItem)
//UPDATE ITEM
router.put("/:id",validatorGetItem, validatorCreateItem,customHeader, updateItem)

//Elimina un registro
router.delete("/:id", validatorGetItem, deleteItem)



module.exports = router

