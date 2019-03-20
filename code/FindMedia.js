module.exports.function = function findMedia (media_id) {
  var http = require('http')
  var GetBaseUrl = require('./lib/GetBaseUrl.js')
  var url = GetBaseUrl.function()
  if (media_id === 0) 
    media_id = 'all'
  if (typeof(media_id) === 'number') {
    url += media_id.toString() + "/"
    try {
      var response = http.getUrl(url)
      }
    catch (err){
      return {}
    }
    var parsedResponse = JSON.parse(response)
    return {
      mediaID: parsedResponse.id,
      mediaName: parsedResponse.Name,
    }
  }
  else {
    var response = http.getUrl(url)
    var parsedResponse = JSON.parse(response)
    var rslt = []
    for (var i=0; i<parsedResponse.length; i++) {
      rslt.push({mediaID: parsedResponse[i].id, mediaName: parsedResponse[i].Name,})
    }
    return rslt;
  }
}
