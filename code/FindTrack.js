module.exports.function = function findTrack (track_id) {
  var http = require('http')
  var GetBaseUrl = require('./lib/GetBaseUrl.js')
  var url = GetBaseUrl.function() + 'Track/'
  if (!track_id || track_id == 0) {
    try {
      var response = http.getUrl(url)
      }
    catch (err){
      return {}
    }
    var json = JSON.parse(response)
    var rslt = []
    for (var i=0; i<json.length; i++) {
      var item = {
        trackID: json[i].id,
        trackName: json[i].Name,
        albumID: json[i].AlbumId, 
        mediaID: json[i].MediaTypeId,
        genreID: json[i].GenreId,
        composer: json[i].Composer,
        milliseconds: json[i].Milliseconds,
        bytes: json[i].Bytes,
        unitPrice: json[i].UnitPrice,
      }
      rslt.push(item)
    }
    return rslt;
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
