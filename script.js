/* Pick a section of a song from Soundcloud and loop it
 *
 * @author: Miguel Del Valle <mdelvalle@utexas.edu>
 *
 */

/*
 * FIND OUT HOW TO INITIALIZE EVERYTHING
 * AFTER THE WIDGET IS READY
 *
 */

function load() {
  var widget = SC.Widget(document.getElementById('soundcloud_widget'));
  var songDuration = 0;
  console.log('songduration0', songDuration);

  // The Soundcloud widget has loaded.
  var ready = new Promise(widget.bind(SC.Widget.Events.READY, function() {
    console.log('Ready...');
    console.log('songduration1', songDuration);
  });

  console.log('songduration3', songDuration);
    //songDuration = duration;
    console.log('songduration', songDuration);

  // Initialize nstSlider class attributes
  ready
  $('.nstSlider')[0].setAttribute('data-range_min', 38000);
  $('.nstSlider')[0].setAttribute('data-range_max', 55000);
  $('.nstSlider')[0].setAttribute('data-cur_min', 38000);
  $('.nstSlider')[0].setAttribute('data-cur_max', 55000);

  $('.nstSlider').nstSlider({
    'crossable_handles': false,
    'left_grip_selector': '.leftGrip',
    'right_grip_selector': '.rightGrip',
    'value_bar_selector': '.bar',
    'value_changed_callback': function(cause, leftValue, rightValue) {
      $('.leftLabel').text(leftValue);
      $('.rightLabel').text(rightValue);
    }
  });

  var startPos = $('.nstSlider').nstSlider('get_current_min_value');
  console.log(startPos);

  var endPos = $('.nstSlider').nstSlider('get_current_max_value');
  console.log(endPos);

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
