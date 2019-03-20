module.exports.function = function findPlaylistTrack (playlist_id) {
  var http = require('http')
  var GetBaseUrl = require('./lib/GetBaseUrl.js')
  var url = GetBaseUrl.function() + 'PlaylistTrack/'
  try {
    var response = http.getUrl(url)
    }
  catch (err){
    return {}
  }
  var json = JSON.parse(response)
  var rslt = []
  
  for (var i=0; i<json.length; i++) {
    if (json[i].id == playlist_id)
      rslt.push({playlistID: json[i].id, trackID: json[i].TrackId})
  }
  return rslt
}
