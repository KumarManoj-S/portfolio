(function() {
  var cssTransition, imageOffset, imageWidth, images, queue, timeout, touch;

  cssTransition = function() {
    var body, i, len, style, vendor, vendors;
    body = document.body || document.documentElement;
    style = body.style;
    vendors = ['Moz', 'Webkit', 'O'];
    if (typeof style['transition'] === 'string') {
      return true;
    }
    for (i = 0, len = vendors.length; i < len; i++) {if (window.CP.shouldStopExecution(1)){break;}
      vendor = vendors[i];
      if (typeof style[vendor + 'Transition'] === 'string') {
        return true;
      }
    }
window.CP.exitedLoop(1);

    return false;
  };

  queue = false;

  touch = document.documentElement['ontouchstart'] !== void 0;

  images = document.querySelector('.images');

  imageWidth = images.firstElementChild.offsetWidth;

  imageOffset = images.firstElementChild.offsetLeft;

  timeout = cssTransition() ? [300, 400] : [0, 0];

  images.addEventListener((touch ? 'touchend' : 'click'), function(event) {
    var direction, lastClassList;
    if (queue) {
      return;
    }
    queue = true;
    if (((touch ? event.changedTouches[0].pageX : event.pageX) - imageOffset) > imageWidth / 2) {
      direction = 'slide-right';
    } else {
      direction = 'slide-left';
    }
    lastClassList = images.lastElementChild.classList;
    lastClassList.add(direction);
    return setTimeout(function() {
      lastClassList.remove(direction);
      lastClassList.add('back');
      return setTimeout(function() {
        images.insertBefore(images.lastElementChild, images.firstElementChild);
        lastClassList.remove('back');
        return queue = false;
      }, timeout[0]);
    }, timeout[1]);
  }, false);

}).call(this);
</script>
<script>
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-46156385-1', 'cssscript.com');
  ga('send', 'pageview');