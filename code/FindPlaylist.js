module.exports.function = function findPlaylist (playlist_id) {
  var http = require('http')
  var GetBaseUrl = require('./lib/GetBaseUrl.js')
  var url = GetBaseUrl.function() + 'Playlist/'
  if (!playlist_id || playlist_id == 0) {
    var response = http.getUrl(url)
    var parsedResponse = JSON.parse(response)
    var rslt = []
    for (var i=0; i<parsedResponse.length; i++) {
      rslt.push({playlistID: parsedResponse[i].id, playlistName: parsedResponse[i].Name,})
    }
    return rslt;
  }
  else {
    url += playlist_id.toString() + "/"
    try {
      var response = http.getUrl(url)
      }
    catch (err){
      return {}
    }
    // save playlist id and name
    var parsedResponse = JSON.parse(response)
    var playlistID = parsedResponse.id
    var playlistName = parsedResponse.Name
    var trackID = []
    // fetch and save trackID associated with this playlist_id
    url = GetBaseUrl.function() + 'PlaylistTrack/'
    var response = http.getUrl(url)
    var json = JSON.parse(response)
    for (var i=0; i<json.length; i++) {
      if (playlist_id == json[i].id)
        trackID.push(json[i].TrackId)
    }
    // fetch and save detailed track info
//    var track = []
//    var GetTrack = require('./FindTrack.js')
//    for (var i=0; i<trackID.length; i++) {
      // TODO: push each track info to tracks
//      track.push(GetTrack.function(trackID[i]))
//    }
    
    return {
      playlistID: playlistID,
      playlistName: playlistName,
//      track: track,
    }
  }
}
