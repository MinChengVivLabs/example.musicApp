module.exports.function = function findAlbumByArtist (artist_id) {
  var http = require('http')
  var GetBaseUrl = require('./lib/GetBaseUrl.js')
  var lib = require('./lib/lib.js')
  var console = require('console')
  var url = undefined
  var response = undefined
  var json = undefined
  // input validation
  if (!artist_id)
    return {}
  // get entire album table
  url = GetBaseUrl.function() + 'Album/'
  try {
    response = http.getUrl(url)
    }
  catch (err){
    return {}
  }
  json = JSON.parse(response)
  var rslt = []
  // match with artist_id
  for (var i=0; i<json.length; i++) {
    if (artist_id == json[i].ArtistId) 
      rslt.push(lib.NewAlbum(json[i]))
  }
  return rslt;
}
