
const express = require("express")
const router = express.Router()
//controller load
const { getItems, getItem, createItem, updateItem, deleteItem} = require("../controllers/tracks")
//validator load 
const { validatorCreateItem,validatorGetItem } = require("../validators/tracks")
//API CUSTOM VALIDATOR
const customHeader = require("../middleware/customHeader")

//controller links
router.get("/", getItems)
//para un solo item
router.get("/:id",validatorGetItem, getItem)
//validator link + customheader api validator
router.post("/", validatorCreateItem, customHeader, createItem)

//UPDATE ITEM
router.put("/:id",validatorGetItem, validatorCreateItem,customHeader, updateItem)

//Elimina un registro
router.delete("/:id", validatorGetItem, deleteItem)



module.exports = router

