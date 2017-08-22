import '../app-scroll-effects-behavior.js';
import { registerEffect } from '../../helpers/helpers.js';
/**
 * While scrolling down, fade in the rear background layer and fade out the front background
 * layer (opacity interpolated based on scroll position).
 */
registerEffect('blend-background', {
  /** @this Polymer.AppLayout.ElementWithBackground */
  setUp: function setUp() {
    var fx = {};
    fx.backgroundFrontLayer = this._getDOMRef('backgroundFrontLayer');
    fx.backgroundRearLayer = this._getDOMRef('backgroundRearLayer');
    fx.backgroundFrontLayer.style.willChange = 'opacity';
    fx.backgroundFrontLayer.style.transform = 'translateZ(0)';
    fx.backgroundRearLayer.style.willChange = 'opacity';
    fx.backgroundRearLayer.style.transform = 'translateZ(0)';
    fx.backgroundRearLayer.style.opacity = 0;
    this._fxBlendBackground = fx;
  },
  /** @this Polymer.AppLayout.ElementWithBackground */
  run: function run(p, y) {
    var fx = this._fxBlendBackground;
    fx.backgroundFrontLayer.style.opacity = 1 - p;
    fx.backgroundRearLayer.style.opacity = p;
  },
  /** @this Polymer.AppLayout.ElementWithBackground */
  tearDown: function tearDown() {
    delete this._fxBlendBackground;
  }
});
