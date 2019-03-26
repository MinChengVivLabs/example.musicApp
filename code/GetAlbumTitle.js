module.exports.function = function getAlbumTitle (track) {
  var id = 1
  if (track) {
    id = track.albumID
  }
  var http = require('http')
  var GetBaseUrl = require('./lib/GetBaseUrl.js')
  var url = GetBaseUrl.function() + 'Album/' + id + '/'
  try {
    var response = http.getUrl(url)
    }
  catch (err){
    return 'Not found'
  }
  return JSON.parse(response).Title;
}
