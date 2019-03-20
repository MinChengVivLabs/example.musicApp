module.exports.function = function findGenre (genre_id) {
  var http = require('http')
  var GetBaseUrl = require('./lib/GetBaseUrl.js')
  var url = GetBaseUrl.function() + 'Genre/'
  if (!genre_id || genre_id == 0) {
    var response = http.getUrl(url)
    var parsedResponse = JSON.parse(response)
    var rslt = []
    for (var i=0; i<parsedResponse.length; i++) {
      rslt.push({genreID: parsedResponse[i].id, genreName: parsedResponse[i].Name,})
    }
    return rslt;
  }
  else {
    url += genre_id.toString() + "/"
    try {
      var response = http.getUrl(url)
      }
    catch (err){
      return {}
    }
    var parsedResponse = JSON.parse(response)
    return {
      genreID: parsedResponse.id,
      genreName: parsedResponse.Name,
    }
  }
}
