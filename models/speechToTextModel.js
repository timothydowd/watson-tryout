const SpeechToTextV1 = require('watson-developer-cloud/speech-to-text/v1');
const fs = require('fs')
const config = require('../config')

//const { version, iam_apikey, url } = config
//console.log(version)

const { iam_apikey, url } = {
    iam_apikey: 'f8uVe9SufmSRc7ht53pZzOpLMDZI2WGVvpwCOvQvFUGx',
    url: 'https://gateway-lon.watsonplatform.net/speech-to-text/api'
}

//speechToText
const speechToText = () => {
    return new Promise ((resolve, reject) => {

        //config
        const { iam_apikey, url, version } = {
            iam_apikey: 'f8Kd6uRxJAa6b-eBA5tjusvEroQxC3oZIpuIqzsjLqqA',
            url: 'https://gateway-lon.watsonplatform.net/speech-to-text/api',
            version: '2017-09-21'
        }

        const speechToTextApi = new SpeechToTextV1({
            version,
            iam_apikey,
            url,
        });
            
            
            const speechToTextParams = {
                audio: fs.createReadStream('./resources/audio.wav'),
                content_type: 'audio/wav'
            }
            
            console.log(speechToTextApi)
        speechToTextApi.recognize(speechToTextParams, (err, output) => {
            console.log('inside callback')
            if (err) reject (err)
            else resolve(output)
        })

    })
}

module.exports = speechToText