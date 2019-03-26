module.exports.function = function getTrackName (album, album_id) {
  // although it is GetTrackName, it return a StructTrack object array
  var http = require('http')
  var GetBaseUrl = require('./lib/GetBaseUrl.js')
  var console = require('console')
  var rslt = []
  var url = GetBaseUrl.function() + 'Track/'
  try {
    var response = http.getUrl(url)
    }
  catch (err){
    return {}
  }
  var json = JSON.parse(response)
  
  // if album, find all tracks with the same album id
  if (album || album_id) {
    if (album)
      album_id = album.albumID
    console.log('album_id = ' + album_id)
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
      if (item.albumID == album_id) {
        rslt.push(item)
      }
    }
    return rslt;
  }
}
