module.exports.function = function findMedia (media_id) {
  var http = require('http')
  var url = "http://e06923d8.ngrok.io/mediatype/" + media_id.toString() + "/"
//  var url = "https://e06923d8.ngrok.io/mediatype/3/"
  var response = http.getUrl(url)
  var parsedResponse = JSON.parse(response)

  return {
    id: parsedResponse.id,
    name: parsedResponse.Name,
  }
}
