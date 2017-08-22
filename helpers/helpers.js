import '../../polymer/polymer.js';
export const _scrollEffects = {};

export const scrollTimingFunction = function easeOutQuad(t, b, c, d) {
  t /= d;
  return -c * t*(t-2) + b;
};

export const registerEffect = function registerEffect(effectName, effectDef) {
  if (_scrollEffects[effectName] != null) {
    throw new Error('effect `'+ effectName + '` is already registered.');
  }
  _scrollEffects[effectName] = effectDef;
};

export const queryAllRoot = function(selector, root) {
  var queue = [root];
  var matches = [];

  while (queue.length > 0) {
    var node = queue.shift();
    matches.push.apply(matches, node.querySelectorAll(selector));
    for (i = 0; node.children[i]; i++) {
      if (node.children[i].shadowRoot) {
        queue.push(node.children[i].shadowRoot);
      }
    }
  }
  return matches;
};

export const scroll = function scroll(options) {
  options = options || {};

  var docEl = document.documentElement;
  var target = options.target || docEl;
  var hasNativeScrollBehavior = 'scrollBehavior' in target.style && target.scroll;
  var scrollClassName = 'app-layout-silent-scroll';
  var scrollTop = options.top || 0;
  var scrollLeft = options.left || 0;
  var scrollTo = target === docEl ? window.scrollTo :
    function scrollTo(scrollLeft, scrollTop) {
      target.scrollLeft = scrollLeft;
      target.scrollTop = scrollTop;
    };

  if (options.behavior === 'smooth') {

    if (hasNativeScrollBehavior) {

      target.scroll(options);

    } else {

      var timingFn = scrollTimingFunction;
      var startTime = Date.now();
      var currentScrollTop = target === docEl ? window.pageYOffset : target.scrollTop;
      var currentScrollLeft = target === docEl ? window.pageXOffset : target.scrollLeft;
      var deltaScrollTop = scrollTop - currentScrollTop;
      var deltaScrollLeft = scrollLeft - currentScrollLeft;
      var duration = 300;
      var updateFrame = (function updateFrame() {
        var now = Date.now();
        var elapsedTime = now - startTime;

        if (elapsedTime < duration) {
          scrollTo(timingFn(elapsedTime, currentScrollLeft, deltaScrollLeft, duration),
              timingFn(elapsedTime, currentScrollTop, deltaScrollTop, duration));
          requestAnimationFrame(updateFrame);
        } else {
          scrollTo(scrollLeft, scrollTop);
        }
      }).bind(this);

      updateFrame();
    }

  } else if (options.behavior === 'silent') {
    var headers = queryAllRoot('app-header', document.body);

    headers.forEach(function(header) {
      header.setAttribute('silent-scroll', '');
    });

    // Browsers keep the scroll momentum even if the bottom of the scrolling content
    // was reached. This means that calling scroll({top: 0, behavior: 'silent'}) when
    // the momentum is still going will result in more scroll events and thus scroll effects.
    // This seems to only apply when using document scrolling.
    // Therefore, when should we remove the class from the document element?

    window.cancelAnimationFrame(Polymer.AppLayout._scrollTimer);

    Polymer.AppLayout._scrollTimer = window.requestAnimationFrame(function() {
      headers.forEach(function(header) {
        header.removeAttribute('silent-scroll');
      });
      Polymer.AppLayout._scrollTimer = null;
    });

    scrollTo(scrollLeft, scrollTop);

  } else {

    scrollTo(scrollLeft, scrollTop);

  }
};
