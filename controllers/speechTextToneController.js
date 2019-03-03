const speechToText = require('../models/speechToTextModel')
const readTone = require('../models/readToneModel')

const speechConvert = (req, res, next) => {
  
    speechToText()
    .then((resultText) => {
       
        console.log('resultText', resultText.results[0].alternatives[0].transcript)
        return readTone(resultText.results[0].alternatives[0].transcript)        
    })
    .then((toneAnalysis) => {
        
        console.log(toneAnalysis.document_tone.tones[0])
        //res.status(200).send(toneAnalysis)
        res.render('pages/home', { toneAnalysis })
    })
    .catch((err) => console.log('error:', err) || next ({err}))


}





module.exports = speechConvert;