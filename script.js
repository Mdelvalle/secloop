/* Pick a section of a song from Soundcloud and loop it
 *
 * @author: Miguel Del Valle <mdelvalle@utexas.edu>
 *
 */

function load() {
  $('#slider-range').slider({
    range: true,
    min: 0,
    max: 1,
    values: [1000, 5000],
    slide: function(event, ui) {
      $('#startNumber').val
    }
  })

  var widget = SC.Widget(document.getElementById('soundcloud_widget'));
  var startPos = document.getElementById('slider-range').slider(); 
  var endPos = document.getElementById('endNumber').value;

  // The Soundcloud widget has loaded.
  widget.bind(SC.Widget.Events.READY, function() {
      console.log('Ready...');
  });

  // When the Soundcloud widget has started to play
  // seek to the START position
  widget.bind(SC.Widget.Events.PLAY, function() {
      widget.seekTo(startPos);
  });

  // Return to START position when the song reaches
  // the STOP position
  widget.bind(SC.Widget.Events.PLAY_PROGRESS, function(e) {
      if (e.currentPosition >= endPos) {
          widget.seekTo(startPos);
      }
  });


}

window.onload = load;
