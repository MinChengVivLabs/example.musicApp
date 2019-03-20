module.exports.function = function findFieldCount (strFieldName) {
  var http = require('http')
  var GetBaseUrl = require('./lib/GetBaseUrl.js')
  var url = GetBaseUrl.function()
  if (!strFieldName)        // in case of undefined
    return 0
  url += strFieldName + '/'
  try {
    var response = http.getUrl(url)
    }
  catch (err) {
    return 0;     // http error is the same as not found
  }
  var json = JSON.parse(response)
  return json.length;
}
