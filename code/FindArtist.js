var image_table = ['JD', 'QD', 'KD', 'JC', 'QC', 'KC', 'JH', 'QH', 'KH', 'JS', 'QS', 'KS']

function GetImageUrl(id) {
  var rslt = 'https://github.com/MinChengVivLabs/example.musicApp/blob/master/JPEG/'
  rslt += image_table[id%image_table.length] + '.jpg?raw=true'
  return rslt;
}

module.exports.function = function findArtist (artist_id) {
  var http = require('http')
  var GetBaseUrl = require('./lib/GetBaseUrl.js')
  var url = GetBaseUrl.function() + 'artist/'
  if (!artist_id || artist_id == 0) {
    var response = http.getUrl(url)
    var parsedResponse = JSON.parse(response)
    var rslt = []
    for (var i=0; i<parsedResponse.length; i++) {
      var item = {
        artistID: parsedResponse[i].id, 
        artistName: parsedResponse[i].Name, 
        imageUrl: GetImageUrl(parsedResponse[i].id),
      }
      rslt.push(item)
    }
    return rslt;
  }
  else {
    url += artist_id.toString() + "/"
    try {
      var response = http.getUrl(url)
      }
    catch (err){
      return {}
    }
    var parsedResponse = JSON.parse(response)
    return {
      artistID: parsedResponse.id,
      artistName: parsedResponse.Name,
      imageUrl: GetImageUrl(parsedResponse.id),
    }
  }
}
