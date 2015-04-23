function SCUrl() {
  var userInput = document.getElementById('userInput').value;
  return 'http://w.soundcloud.com/player/?url=' + userInput + '&auto_play=false';
}
