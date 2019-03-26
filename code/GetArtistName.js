module.exports.function = function getArtistName (album) {
  var id = 1
  if (album) {
    id = album.artistID
  }
  var http = require('http')
  var GetBaseUrl = require('./lib/GetBaseUrl.js')
  var url = GetBaseUrl.function() + 'Artist/' + id + '/'
  try {
    var response = http.getUrl(url)
    }
  catch (err){
    return 'Not found'
  }
  var json = JSON.parse(response)
  return json.Name;
}
