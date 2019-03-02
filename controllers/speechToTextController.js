const speechToText = require('../models/speechToTextModel')

const speechConvert = (req, res, next) => {
  
    speechToText()
    .then((resultText) => {
        console.log('inside first then')
        console.log('resultText', resultText.results[0].alternatives[0].transcript)
        
    })
    .catch((err) => console.log('error:', err) || next ({err}))


}





module.exports = speechConvert;