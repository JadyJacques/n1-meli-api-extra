const express = require("express")
const router = express.Router()
const controller = require('../controllers/filmesController')


router.get("/", controller.get)


router.get("/:id", controller.getById)
router.get("/genero/:type", controller.getByType)


module.exports = router
