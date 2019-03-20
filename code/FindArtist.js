module.exports.function = function findArtist (artist_id) {
  var http = require('http')
  var GetBaseUrl = require('./lib/GetBaseUrl.js')
  var url = GetBaseUrl.function() + 'artist/'
  if (!artist_id || artist_id == 0) {
    var response = http.getUrl(url)
    var parsedResponse = JSON.parse(response)
    var rslt = []
    for (var i=0; i<parsedResponse.length; i++) {
      rslt.push({artistID: parsedResponse[i].id, artistName: parsedResponse[i].Name,})
    }
    return rslt;
  }
  else {
    url += artist_id.toString() + "/"
    try {
      var response = http.getUrl(url)
      }
    catch (err){
      return {}
    }
    var parsedResponse = JSON.parse(response)
    return {
      artistID: parsedResponse.id,
      artistName: parsedResponse.Name,
    }
  }
}
