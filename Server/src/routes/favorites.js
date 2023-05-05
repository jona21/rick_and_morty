const express = require("express");
const router = express.Router();

const {postFav, deleteFav} = require("../controllers/favorites")

router.post("/", (req, res) => {
    postFav(req, res)
});

router.delete('/:id', (req, res) => {
    deleteFav(req, res);
});


module.exports= router