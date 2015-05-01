function SCUrl() {
  var userInput = document.getElementById('userInput').value;
  console.log('http://w.soundcloud.com/player/?url=' + userInput + '&auto_play=false');
  return 'http://w.soundcloud.com/player/?url=' + userInput + '&auto_play=false';
}
