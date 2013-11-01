/*global $:true, console:true, Handlebars:true, JST:true*/

/**
 * Throttle adapted from [underscore](http://underscorejs.org/docs/underscore.html)
 */
function throttle(func, wait, opt) {
  var context, args, result;
  var timeout = null;
  var previous = 0;
  var options = opt || {};
  var later = function() {
    previous = options.leading === false ? 0 : new Date();
    timeout = null;
    result = func.apply(context, args);
  };
  return function() {
    var now = new Date();
    if (!previous && options.leading === false) previous = now;
    var remaining = wait - (now - previous);
    context = this;
    args = arguments;
    if (remaining <= 0) {
      clearTimeout(timeout);
      timeout = null;
      previous = now;
      result = func.apply(context, args);
    } else if (!timeout && options.trailing !== false) {
      timeout = setTimeout(later, remaining);
    }
    return result;
  };
}

$(document).ready(function(){

$('.nav-btn').click( function() {
  $('.site-header').toggleClass('expanded');
  console.log('nav-clicked');
});

$( window ).resize(function(event) {
  if ( $(window).width() > 600 ) {
    $('.site-header').removeClass('expanded');
  }
});

function adjustBackground() {
  $( '.homepage-head' ).css( 'background-position', '0 ' + ( $( window ).scrollTop() - 60) + 'px');
}

var throttleWaitTime = 16.67; // 60fps
var throttleAdjustBackground = throttle(adjustBackground, throttleWaitTime);
$( window ).scroll( function() {
  // Only update at 60fps
  throttleAdjustBackground();
});

});