import '../../polymer/polymer.js';
import '../../iron-flex-layout/iron-flex-layout.js';
import { IronResizableBehavior } from '../../iron-resizable-behavior/iron-resizable-behavior.js';
import { AppScrollEffectsBehavior } from '../app-scroll-effects/app-scroll-effects-behavior.js';
import { Polymer } from '../../polymer/lib/legacy/polymer-fn.js';
Polymer({
  _template: `
    <style>
      :host {
        position: relative;
        display: block;
      }

      #background {
        @apply --layout-fit;
        overflow: hidden;
        height: 100%;
      }

      #backgroundFrontLayer {
        min-height: 100%;
        pointer-events: none;
        background-size: cover;
        @apply --app-box-background-front-layer;
      }

      #contentContainer {
        position: relative;
        width: 100%;
        height: 100%;
      }

      :host([disabled]),
      :host([disabled]) #backgroundFrontLayer {
        transition: none !important;
      }
    </style>

    <div id="background">
      <div id="backgroundFrontLayer">
        <slot name="background"></slot>
      </div>
    </div>
    <div id="contentContainer">
      <slot></slot>
    </div>
`,

  is: 'app-box',

  behaviors: [
    AppScrollEffectsBehavior,
    IronResizableBehavior
  ],

  listeners: {
    'iron-resize': '_resizeHandler'
  },

  /**
   * The current scroll progress.
   *
   * @type {number}
   */
  _progress: 0,

  attached: function() {
    this.resetLayout();
  },

  _debounceRaf: function(fn) {
    var self = this;
    if (this._raf) {
      window.cancelAnimationFrame(this._raf);
    }
    this._raf = window.requestAnimationFrame(function() {
      self._raf = null;
      fn.call(self);
    });
  },

  /**
   * Resets the layout. This method is automatically called when the element is attached to the DOM.
   *
   * @method resetLayout
   */
  resetLayout: function() {
    this._debounceRaf(function() {
      // noop if the box isn't in the rendered tree
      if (this.offsetWidth === 0 && this.offsetHeight === 0) {
        return;
      }

      var scrollTop = this._clampedScrollTop;
      var savedDisabled = this.disabled;

      this.disabled = true;
      this._elementTop = this._getElementTop();
      this._elementHeight = this.offsetHeight;
      this._cachedScrollTargetHeight = this._scrollTargetHeight;
      this._setUpEffect();
      this._updateScrollState(scrollTop);
      this.disabled = savedDisabled;
    });
  },

  _getElementTop: function() {
    var currentNode = this;
    var top = 0;

    while (currentNode && currentNode !== this.scrollTarget) {
      top += currentNode.offsetTop;
      currentNode = currentNode.offsetParent;
    }
    return top;
  },

  _updateScrollState: function(scrollTop) {
    if (this.isOnScreen()) {
      var viewportTop = this._elementTop - scrollTop;
      this._progress = 1 - (viewportTop + this._elementHeight) / this._cachedScrollTargetHeight;
      this._runEffects(this._progress, scrollTop);
    }
  },

  /**
   * Returns true if this app-box is on the screen.
   * That is, visible in the current viewport.
   *
   * @method isOnScreen
   * @return {boolean}
   */
  isOnScreen: function() {
    return this._elementTop < this._scrollTop + this._cachedScrollTargetHeight
        && this._elementTop + this._elementHeight > this._scrollTop;
  },

  _resizeHandler: function() {
    this.resetLayout();
  },

  _getDOMRef: function(id) {
    if (id === 'background') {
      return this.$.background;
    }
    if (id === 'backgroundFrontLayer') {
      return this.$.backgroundFrontLayer;
    }
  },

  /**
   * Returns an object containing the progress value of the scroll effects.
   *
   * @method getScrollState
   * @return {Object}
   */
  getScrollState: function() {
    return { progress: this._progress };
  }
});
