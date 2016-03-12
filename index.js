var express = require('express');
var cors = require('cors')
var app = express();
app.use(cors());

app.set('port', (process.env.PORT || 5000));

// var Cam = require('onvif').Cam;
// var cam = new Cam({hostname: '176.86.90.106',username: 'admin',password: 'admin',port:'2000'});

app.get('/', function (req, res) {
	// cam.getStreamUri({protocol:'RTSP'}, function(err, stream) {
		// res.send('<html><body><embed type="application/x-vlc-plugin" target="' + stream.uri + '"></embed></boby></html>');
	// });
	console.log("hello");
	res.send("helloooooooo");
});

app.get('/move', function (req, res) {
	var x = req.query.x;
	var y = req.query.y;
	cam.continuousMove({x:x,y:y,zoom:1});
	res.send("moving the camera");
});

app.listen(app.get('port'), function () {
  console.log('Node app is running on port', app.get('port'));
}); 



