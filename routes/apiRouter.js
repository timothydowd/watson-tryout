const apiRouter = require("express").Router();
const speechConvert = require('../controllers/speechTextToneController')


apiRouter.use("/watson", speechConvert);


module.exports = apiRouter;