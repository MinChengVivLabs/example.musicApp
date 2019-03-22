module.exports.function = function addOne (id) {
  var http = require('http')
  var console = require('console')
  var GetBaseUrl = require('./lib/GetBaseUrl.js')
  var url = GetBaseUrl.function() + 'MediaType/'
  
  var response = 0
  if (!id)
    response = http.postUrl(url, {Name: 'Gen XYZ Media'})
  else 
    response = http.postUrl(url, {id: id, Name: 'Gen '+id+' Media'})
  console.log(response)
  return response;
}
