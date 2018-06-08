const $ = require('jquery');
$(document).ready(() => {
  var $audio = $('#horn');
  var audio = $audio[0];
  var button = $('#butang');
  button.on('click', function(){
     if (audio.paused) {
       audio.play();
     } else {
       audio.currentTime = 0;
     }
  })
});
