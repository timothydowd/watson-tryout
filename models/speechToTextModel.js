const SpeechToTextV1 = require('watson-developer-cloud/speech-to-text/v1');
const fs = require('fs')
const config = require('../config')

const { iam_apikey, url, version } = config

//speech tot ext instance cretaed and credentials passed to api
const speechToTextApi = new SpeechToTextV1({
    version,
    iam_apikey,
    url,
});

//params obj for api   
const speechToTextParams = {
    audio: fs.createReadStream('./resources/audio.wav'),
    content_type: 'audio/wav'
}

//speechToText
const speechToText = () => {
    return new Promise ((resolve, reject) => {
        //console.log(speechToTextApi)
        speechToTextApi.recognize(speechToTextParams, (err, output) => {
            if (err) reject (err)
            else resolve(output)
        })
    })
}

module.exports = speechToText