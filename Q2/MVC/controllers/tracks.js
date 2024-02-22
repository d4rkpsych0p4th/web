const { tracksModel } = require('../models')

const getItems = async (req, res) => {
    const data = await tracksModel.find({})
res.send(data,user)}


const getItem = async (req, res) => {
    const {id}=req.params.id
    const data= await tracksModel.find({name:id})
    res.send(data,id)
}

const createItem = async (req, res) => {
    const { body } = req
    console.log(body)
    const data = await tracksModel.create(body)
    res.send(data)}

    module.exports = { getItems, getItem, createItem };