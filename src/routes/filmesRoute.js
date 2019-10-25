const express = require("express")
const router = express.Router()
const controller = require('../controllers/filmesController')


router.get("/", controller.get)


router.get("/:id", controller.getById)
router.get("/genero/:nome", controller.getByType)
router.get("/longos/resultado", controller.getFilmesLongos)
router.get("/release/resultado", controller.getByRelease)



module.exports = router
