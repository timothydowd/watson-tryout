const speechToText = require('../models/speechToTextModel')
const readTone = require('../models/readToneModel')
/*
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
*/

const speechConvert = (req, res, next) => {
    speechToText()
    .then(resultText => Promise.all([readTone(resultText.results[0].alternatives[0].transcript), resultText]))
    .then(([toneAnalysis, resultText]) => {  
        res.render('pages/home', { toneAnalysis, resultText })
    })
    .catch((err) => console.log('error:', err) || next ({err}))
}

/*
exports.getSongAnalysis = (req, res, next) => {
    const { artist, track } = req.query;
    getLyrics(artist, track)
      .then(lyrics => Promise.all([analyseTone(lyrics), lyrics]))
      .then(([tones, lyrics]) =>
        res.render('tone', { tones, lyrics, track, artist }),
      );
  };
*/


module.exports = speechConvert;