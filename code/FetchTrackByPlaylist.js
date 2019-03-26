module.exports.function = function fetchTrackByPlaylist (playlist) {
  var http = require('http')
  var GetBaseUrl = require('./lib/GetBaseUrl.js')
  var console = require('console')
  var url = undefined
  var response = undefined
  var json = undefined
  // input validation
  if (!playlist || !playlist.playlistID)
    return {}
  // fetch and save trackID associated with this playlist.playlistID
  url = GetBaseUrl.function() + 'PlaylistTrack/'
  try {
    response = http.getUrl(url)
    }
  catch (err){
    return {}
  }
  json = JSON.parse(response)
  var trackID = []
  for (var i=0; i<json.length; i++) {
    if (playlist.playlistID == json[i].id)
      trackID.push(json[i].TrackId)
  }
  console.log(trackID)
  // fetch all track list and match id by index
  url = GetBaseUrl.function() + 'Track/'
  try {
    response = http.getUrl(url)
    }
  catch (err){
    return {}
  }
  json = JSON.parse(response)
  var rslt = []
  for (i=0; i<trackID.length; i++) {
    var index = trackID[i]-1;     // important, json object starts at 0, but id starts at 1
    if (json[index]) {
      var item = {
          trackID: json[index].id,
          trackName: json[index].Name,
          albumID: json[index].AlbumId, 
          mediaID: json[index].MediaTypeId,
          genreID: json[index].GenreId,
          composer: json[index].Composer,
          milliseconds: json[index].Milliseconds,
          bytes: json[index].Bytes,
          unitPrice: json[index].UnitPrice,
      }
      }
    else {
      var item = {
        trackID: index,
        trackName: '-----------------------',
        albumID: 1,
        mediaID: 1,
        genreID: 1,
        composer: 'simon',
        milliseconds: 0,
        bytes: 0,
        unitPrice: 0,
      }
      console.log(item)
    }
    rslt.push(item)
  }
  return rslt;
}
