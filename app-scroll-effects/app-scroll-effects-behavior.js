import '../../polymer/polymer.js';
import { IronScrollTargetBehavior } from '../../iron-scroll-target-behavior/iron-scroll-target-behavior.js';
import { _scrollEffects } from '../helpers/helpers.js';

export const AppScrollEffectsBehavior = [
  IronScrollTargetBehavior,
 {

  properties: {

    /**
     * A space-separated list of the effects names that will be triggered when the user scrolls.
     * e.g. `waterfall parallax-background` installs the `waterfall` and `parallax-background`.
     */
    effects: {
      type: String
    },

    /**
     * An object that configurates the effects installed via the `effects` property. e.g.
     * ```js
     *  element.effectsConfig = {
     *   "blend-background": {
     *     "startsAt": 0.5
     *   }
     * };
     * ```
     * Every effect has at least two config properties: `startsAt` and `endsAt`.
     * These properties indicate when the event should start and end respectively
     * and relative to the overall element progress. So for example, if `blend-background`
     * starts at `0.5`, the effect will only start once the current element reaches 0.5
     * of its progress. In this context, the progress is a value in the range of `[0, 1]`
     * that indicates where this element is on the screen relative to the viewport.
     */
    effectsConfig: {
      type: Object,
      value: function() {
        return {};
      }
    },

    /**
     * Disables CSS transitions and scroll effects on the element.
     */
    disabled: {
      type: Boolean,
      reflectToAttribute: true,
      value: false
    },

    /**
     * Allows to set a `scrollTop` threshold. When greater than 0, `thresholdTriggered`
     * is true only when the scroll target's `scrollTop` has reached this value.
     *
     * For example, if `threshold = 100`, `thresholdTriggered` is true when the `scrollTop`
     * is at least `100`.
     */
    threshold: {
      type: Number,
      value: 0
    },

    /**
     * True if the `scrollTop` threshold (set in `scrollTopThreshold`) has
     * been reached.
     */
    thresholdTriggered: {
      type: Boolean,
      notify: true,
      readOnly: true,
      reflectToAttribute: true
    }
  },

  observers: [
    '_effectsChanged(effects, effectsConfig, isAttached)'
  ],

  /**
   * Updates the scroll state. This method should be overridden
   * by the consumer of this behavior.
   *
   * @method _updateScrollState
   */
  _updateScrollState: function() {},

  /**
   * Returns true if the current element is on the screen.
   * That is, visible in the current viewport. This method should be
   * overridden by the consumer of this behavior.
   *
   * @method isOnScreen
   * @return {boolean}
   */
  isOnScreen: function() {
    return false;
  },

  /**
   * Returns true if there's content below the current element. This method
   * should be overridden by the consumer of this behavior.
   *
   * @method isContentBelow
   * @return {boolean}
   */
  isContentBelow: function() {
    return false;
  },

  /**
   * List of effects handlers that will take place during scroll.
   *
   * @type {Array<Function>}
   */
  _effectsRunFn: null,

  /**
   * List of the effects definitions installed via the `effects` property.
   *
   * @type {Array<Object>}
   */
  _effects: null,

  /**
   * The clamped value of `_scrollTop`.
   * @type number
   */
  get _clampedScrollTop() {
    return Math.max(0, this._scrollTop);
  },

  detached: function() {
    this._tearDownEffects();
  },

  /**
   * Creates an effect object from an effect's name that can be used to run
   * effects programmatically.
   *
   * @method createEffect
   * @param {string} effectName The effect's name registered via `Polymer.AppLayout.registerEffect`.
   * @param {Object=} effectConfig The effect config object. (Optional)
   * @return {Object} An effect object with the following functions:
   *
   *  * `effect.setUp()`, Sets up the requirements for the effect.
   *       This function is called automatically before the `effect` function returns.
   *  * `effect.run(progress, y)`, Runs the effect given a `progress`.
   *  * `effect.tearDown()`, Cleans up any DOM nodes or element references used by the effect.
   *
   * Example:
   * ```js
   * var parallax = element.createEffect('parallax-background');
   * // runs the effect
   * parallax.run(0.5, 0);
   * ```
   */
  createEffect: function(effectName, effectConfig) {
    var effectDef = _scrollEffects[effectName];
    if (!effectDef) {
      throw new ReferenceError(this._getUndefinedMsg(effectName));
    }
    var prop = this._boundEffect(effectDef, effectConfig || {});
    prop.setUp();
    return prop;
  },

  /**
   * Called when `effects` or `effectsConfig` changes.
   */
  _effectsChanged: function(effects, effectsConfig, isAttached) {
    this._tearDownEffects();

    if (!effects || !isAttached) {
      return;
    }
    effects.split(' ').forEach(function(effectName) {
      var effectDef;
      if (effectName !== '') {
        if ((effectDef = _scrollEffects[effectName])) {
          this._effects.push(this._boundEffect(effectDef, effectsConfig[effectName]));
        } else {
          console.warn(this._getUndefinedMsg(effectName));
        }
      }
    }, this);

    this._setUpEffect();
  },

  /**
   * Forces layout
   */
  _layoutIfDirty: function() {
    return this.offsetWidth;
  },

  /**
   * Returns an effect object bound to the current context.
   *
   * @param {Object} effectDef
   * @param {Object=} effectsConfig The effect config object if the effect accepts config values. (Optional)
   */
  _boundEffect: function(effectDef, effectsConfig) {
    effectsConfig = effectsConfig || {};
    var startsAt = parseFloat(effectsConfig.startsAt || 0);
    var endsAt = parseFloat(effectsConfig.endsAt || 1);
    var deltaS = endsAt - startsAt;
    var noop = function() {};
    // fast path if possible
    var runFn = (startsAt === 0 && endsAt === 1) ? effectDef.run :
      function(progress, y) {
        effectDef.run.call(this,
            Math.max(0, (progress - startsAt) / deltaS), y);
      };
    return {
      setUp: effectDef.setUp ? effectDef.setUp.bind(this, effectsConfig) : noop,
      run: effectDef.run ? runFn.bind(this) : noop,
      tearDown: effectDef.tearDown ? effectDef.tearDown.bind(this) : noop
    };
  },

  /**
   * Sets up the effects.
   */
  _setUpEffect: function() {
    if (this.isAttached && this._effects) {
      this._effectsRunFn = [];
      this._effects.forEach(function(effectDef) {
        // install the effect only if no error was reported
        if (effectDef.setUp() !== false) {
          this._effectsRunFn.push(effectDef.run);
        }
      }, this);
    }
  },

  /**
   * Tears down the effects.
   */
  _tearDownEffects: function() {
    if (this._effects) {
      this._effects.forEach(function(effectDef) {
        effectDef.tearDown();
      });
    }
    this._effectsRunFn = [];
    this._effects = [];
  },

  /**
   * Runs the effects.
   *
   * @param {number} p The progress
   * @param {number} y The top position of the current element relative to the viewport.
   */
  _runEffects: function(p, y) {
    if (this._effectsRunFn) {
      this._effectsRunFn.forEach(function(run) {
        run(p, y);
      });
    }
  },

  /**
   * Overrides the `_scrollHandler`.
   */
  _scrollHandler: function() {
    if (!this.disabled) {
      var scrollTop = this._clampedScrollTop;
      this._updateScrollState(scrollTop);
      if (this.threshold > 0) {
        this._setThresholdTriggered(scrollTop >= this.threshold);
      }
    }
  },

  /**
   * Override this method to return a reference to a node in the local DOM.
   * The node is consumed by a scroll effect.
   *
   * @param {string} id The id for the node.
   */
  _getDOMRef: function(id) {
    console.warn('_getDOMRef', '`'+ id +'` is undefined');
  },

  _getUndefinedMsg: function(effectName) {
    return 'Scroll effect `' + effectName + '` is undefined. ' +
        'Did you forget to import app-layout/app-scroll-effects/effects/' + effectName + '.html ?';
  }

}];
