import '../app-scroll-effects-behavior.js';
import { registerEffect } from '../../helpers/helpers.js';
/**
 * Toggles the shadow property in app-header when content is scrolled to create a sense of depth
 * between the element and the content underneath.
 */
registerEffect('waterfall', {
  /**
   *  @this Polymer.AppLayout.ElementWithBackground
   */
  run: function run() {
    this.shadow = this.isOnScreen() && this.isContentBelow();
  }
});
