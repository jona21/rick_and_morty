const axios = require("axios");

require("dotenv").config(); // process.env

const URL = process.env.API_URL;
const EMAIL = process.env.EMAIL;
const PASSWORD = process.env.PASSWORD;

const STATUS_OK = 200;
const STATUS_ERROR = 404;

const getCharById = async (req, res) => {
  try {
    const { id } = req.params;
    const { data } = await axios.get(`${URL}${id}`);
    if (data.name) {
      // console.log("ininininininin")
      const character = {
        id: data.id,
        name: data.name,
        status: data.status,
        species: data.species,
        gender: data.gender,
        origin: data.origin?.name,
        image: data.image
      };
      return res.status(STATUS_OK).json(character);
    }
    else {
      res.status(STATUS_ERROR).json({ message: "character not found" });
    }
  } catch (error) {
    res.status(STATUS_ERROR).json({ message: error });
  }
}
// edit [{}{}{}] -> map  -> [{},{},{}]
// filter [{}{}{}] -> filter [{}]

/*function getAllChar(req, res) {
  try {
    axios.get(`${URL}`).then(({ data }) => {
      if (data) {
        // *** ERROR al usar filter y no map para editar los campos y que estaba en data.results
        const characters = data.results.map((ch) => {
          const character = {
            id: ch.id,
            name: ch.name,
            status: ch.status,
            species: ch.species,
            origin: ch.origin?.name,
            gender: ch.gender,
            image: ch.image
          };
          return character;
        });
        // console.log(":::", characters);
        res.status(STATUS_OK).json(characters);
      } else {
        res.status(STATUS_ERROR).json({ message: "character not found" });
      }
    });
  } catch (error) {
    res.status(500).json({ message: error });
  }
}*/

module.exports = {
  getCharById,
};
