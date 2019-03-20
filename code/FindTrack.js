module.exports.function = function findTrack (track_id) {
  var http = require('http')
  var GetBaseUrl = require('./lib/GetBaseUrl.js')
  var url = GetBaseUrl.function() + 'Track/'
  if (!track_id || track_id == 0) {
    return {}
  }
  else {
    url += track_id.toString() + "/"
    try {
      var response = http.getUrl(url)
      }
    catch (err){
      return {}
    }
    var json = JSON.parse(response)
    return {
      trackID: json.id,
      trackName: json.Name,
      albumID: json.AlbumId, 
      mediaID: json.MediaTypeId,
      genreID: json.GenreId,
      composer: json.Composer,
      milliseconds: json.Milliseconds,
      bytes: json.Bytes,
      unitPrice: json.UnitPrice,
    }
  }
}
