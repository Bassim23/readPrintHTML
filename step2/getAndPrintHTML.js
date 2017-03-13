var https = require('https');

function getAndPrintHTML () {

  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step2.html'
  };
  var buffer = '';

  https.get(requestOptions, function(response) {
  response.setEncoding('utf8');
  response.on('data', function (data){
     buffer += data;
  });
  response.on('end', function() {
    console.log("Response stream complete.");
    console.log(buffer);
  });
});
}
getAndPrintHTML();
