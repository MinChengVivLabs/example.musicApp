module.exports.function = function deleteOne (id) {
  var http = require('http')
  var console = require('console')
  var GetBaseUrl = require('./lib/GetBaseUrl.js')
  var url = GetBaseUrl.function() + 'MediaType/'
  
  var response = 0
  if (!id) {
    return 'Invalid input'
  }
  else {
    url += id.toString() + '/'
    //url += 'XNrr6dt/'
    return http.deleteUrl(url, {})
  }
}
