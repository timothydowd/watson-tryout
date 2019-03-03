const ToneAnalyzerV3 = require('watson-developer-cloud/tone-analyzer/v3');
const { iam_apikey, url, version } = {
    iam_apikey: 'Xg3NyHxyKQrKPtL0dzMzuWRglhFxzM_p-iKz7g5lIE0T',
    url: 'https://gateway-lon.watsonplatform.net/tone-analyzer/api',
    version: '2017-09-21'
}



const toneAnalyzer = new ToneAnalyzerV3({
  version,
  iam_apikey,
  url
});


const readTone = (text) => {
    //promise executor invoked by promise
    return new Promise((resolve, reject) => {

      const toneParams = {
        tone_input: { 'text': text },
        content_type: 'application/json'
      };
        
        toneAnalyzer.tone(toneParams, (err, output) => {
            if (err) reject(err)
            else resolve(output)
        });
    })
}

module.exports = readTone;