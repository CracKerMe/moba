module.exports = app => {
  const express = require('express')
  const router = express.Router()
  const Category = require('../../models/Category')

  router.get('/category', async (req, res) => {
    const items = await Category.find().limit(10)
    res.send(items)
  })
  router.post('/category', async (req, res) => {
    const model = await Category.create(req.body)
    res.send(model)
  })
  router.get('/category/:id', async (req, res) => {
    const model = await Category.findById(req.params.id).limit(10)
    res.send(model)
  })
  router.put('/category/:id', async (req, res) => {
    const model = await Category.findByIdAndUpdate(req.params.id, req.body)
    res.send(model)
  })

  app.use('/admin/api', router)
}