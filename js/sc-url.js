// Store the Soundcloud URL that the user provides
// so that it can be accessed later
function SCUrl() {

  var userInput = document.getElementById('userInput').value;

  var widget_options =
    userInput +
    '&auto_play=false' +
    '&enable_api=true' +
    '&show_artwork=false';

  var url = 'http://w.soundcloud.com/player/?url=' + widget_options;

  localStorage.setItem('url', url);
  
}
