const apiRouter = require("express").Router();
const speechConvert = require('../controllers/speechToTextController')


apiRouter.use("/watson", speechConvert);


module.exports = apiRouter;