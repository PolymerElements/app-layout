import '../app-scroll-effects-behavior.js';
import './waterfall.js';
import './resize-title.js';
import './blend-background.js';
import './parallax-background.js';
import { registerEffect } from '../../helpers/helpers.js';
/**
 * Shorthand for the waterfall, resize-title, blend-background, and parallax-background effects.
 */
registerEffect('material', {
  /**
   * @this Polymer.AppLayout.ElementWithBackground
   */
  setUp: function setUp() {
    this.effects = 'waterfall resize-title blend-background parallax-background';
    return false;
  }
});
