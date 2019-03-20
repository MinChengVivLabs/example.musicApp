module.exports.function = function listFieldSimple (strFieldName) {
  var http = require('http')
  var GetBaseUrl = require('./lib/GetBaseUrl.js')
  var url = GetBaseUrl.function()
//  var url = "http://66611e2c.ngrok.io/"     // base url, should get it from a GetBaseUrl.js file
  if (!strFieldName)        // in case of undefined
    return []
  url += strFieldName + '/'
  try {
    var response = http.getUrl(url)
    }
  catch (err) {
    return 0;     // http error is the same as not found
  }
  var json = JSON.parse(response)
  var rslt = []
  for (var i=0; i<json.length; i++) {
    rslt.push({id: json[i].id, })
  }
  return rslt
}
