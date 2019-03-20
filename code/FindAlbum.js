module.exports.function = function findAlbum (album_id) {
  var http = require('http')
  var GetBaseUrl = require('./lib/GetBaseUrl.js')
  var url = GetBaseUrl.function() + 'Album/'
  if (!album_id || album_id == 0) {
    var response = http.getUrl(url)
    var parsedResponse = JSON.parse(response)
    var rslt = []
    for (var i=0; i<parsedResponse.length; i++) {
      var record = {
        albumID: parsedResponse[i].id,
        albumTitle: parsedResponse[i].Title,
        artistID: parsedResponse[i].ArtistId,
      }
      rslt.push(record)
    }
    return rslt;
  }
  else {
    url += album_id.toString() + "/"
    try {
      var response = http.getUrl(url)
      }
    catch (err){
      return {}
    }
    var parsedResponse = JSON.parse(response)
    return {
        albumID: parsedResponse.id,
        albumTitle: parsedResponse.Title,
        artistID: parsedResponse.ArtistId,
    }
  }
}
