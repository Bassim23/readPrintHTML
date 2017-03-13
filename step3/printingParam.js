var https = require('https');

function getAndPrintHTML (options) {

  var buffer = '';

  https.get(options, function(response) {
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
  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step1.html'
  };
getAndPrintHTML(requestOptions);


// var https = require('https');
// var input = process.argv[2].split('/');
// var param = {
//     host: input[0],
//     path: input[1]
// };

// console.log(param.host);
// console.log(param.path);

// function getAndPrintHTML (options) {

//   var buffer = '';

//   https.get(param, function(response) {
//   response.setEncoding('utf8');
//   response.on('data', function (data){
//      buffer += data;
//   });
//   response.on('end', function() {
//     console.log("Response stream complete.");
//     console.log(buffer);
//   });
// });
// }
// getAndPrintHTML(param);

  // var requestOptions = {
  //   host: 'sytantris.github.io',
  //   path: '/http-examples/step1.html'
  // };
