import '../../../polymer/polymer.js';
import { AppScrollEffectsBehavior } from '../app-scroll-effects-behavior.js';
import { Polymer } from '../../../polymer/lib/legacy/polymer-fn.js';

Polymer({
  _template: `
    <style>
      :host {
        position: relative;
        display: block;
      }

      #background,
      #backgroundFrontLayer,
      #backgroundRearLayer {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
      }

      #backgroundFrontLayer {
        bottom: -200px;
      }

      #mainTitle, #condensedTitle {
        display: block;
        overflow: hidden;
        margin: 0;
        padding: 0;
        position: absolute;
      }

      #mainTitle {
        height: 18px;
        top: 0;
        left: 0;
      }

      #condensedTitle {
        height: 37px;
        top: 100px;
        left: 100px;
      }

    </style>

    <div id="background"></div>
    <div id="backgroundFrontLayer"></div>
    <div id="backgroundRearLayer"></div>
    <h4 id="mainTitle">Title</h4>
    <h1 id="condensedTitle">Condensed title</h1>
`,

  is: 'x-container',

  behaviors: [
    AppScrollEffectsBehavior
  ],

  properties: {
    shadow: {
      type: Boolean,
      reflectToAttribute: true
    }
  },

  observers: [
    '_xScrollEffectChanged(effects)'
  ],

  _getDOMRef: function(id) {
    return this.$[id] || null;
  },

  _updateScrollState: function(scrollTop) {
    this._runEffects(scrollTop / this.offsetHeight, scrollTop);
  },

  _xScrollEffectChanged: function() {
    this._updateScrollState(this._scrollTop);
  }
});
