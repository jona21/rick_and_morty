const express = require("express");
const router = express.Router();

const {getCharById} = require("../controllers/characters")

//router.get("/all",getAllChar)
router.get('/:id', (req, res) => {
    getCharById(req, res);
});
//router.get("/detail/:id",getCharById)

module.exports= router