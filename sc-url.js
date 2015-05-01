// Store the Soundcloud URL that the user provides
// so that it can be accessed later
function SCUrl() {
  var userInput = document.getElementById('userInput').value;
  var url = 'http://w.soundcloud.com/player/?url=' + userInput + '&auto_play=false';
  localStorage.setItem('url', url);
}
