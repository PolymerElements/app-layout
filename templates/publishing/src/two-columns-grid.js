import { Polymer } from '../../../../polymer/lib/legacy/polymer-fn.js';

Polymer({
  _template: `
    <style>

      :host {
        @apply --layout-horizontal;
        @apply --layout-wrap;
        max-width: calc(2 * var(--grid-column-width) + 4 * var(--grid-gutter));
        margin: var(--grid-gutter) auto;
        /* item has width/height ratio 4:3 */
        --grid-item-height: calc(3 * var(--grid-column-width) / 4);
      }

      :host > ::slotted(*) {
        @apply --layout-flex-none;
        width: var(--grid-column-width);
        height: var(--grid-item-height);
        margin: var(--grid-gutter);
        box-sizing: border-box;
      }

      /* https://github.com/webcomponents/shadycss/issues/15 */
      :host > ::slotted(*:nth-of-type(3n-2)) {
        width: calc(100% - 2 * var(--grid-gutter));
        /* large item has widht/height ratio 2:1 */
        height: calc(var(--grid-column-width)  + 2 * var(--grid-gutter));
      }

      :host([narrow-layout]) {
        max-width: none;
        margin: 0 var(--grid-gutter);
      }

      :host([narrow-layout]) > ::slotted(*) {
        width: 100% !important;
        height: var(--grid-item-height) !important;
        margin: var(--grid-gutter) 0;
      }

      iron-media-query {
        display: none;
      }

    </style>

    <slot></slot>

    <iron-media-query query="[[query]]" query-matches="{{narrowLayout}}"></iron-media-query>
`,

  is: 'two-columns-grid',

  properties: {

    /**
     * The width of the column in px.
     */
    columnWidth: {
      type: Number,
      value: 300
    },

    /**
     * The gutter width in px.
     */
    gutter: {
      type: Number,
      value: 8
    },

    /**
     * Indicates it is in narrow layout which means the grid is displayed as single column.
     */
    narrowLayout: {
      type: Boolean,
      notify: true,
      reflectToAttribute: true
    }

  },

  observers: [
    '_updateLayout(columnWidth, gutter)'
  ],

  attached: function() {
    // observers may run before attached, and updateStyles() will skip if it is not attached.
    // So we need to make sure updateStyles() is called after it's attached.
    this._updateCustomStyles();
  },

  _updateLayout: function(columnWidth, gutter) {
    this.query = '(max-width:' + (2 * columnWidth + 4 * gutter) + 'px)';
    this._updateCustomStyles();
  },

  _updateCustomStyles: function() {
    this.updateStyles({
      '--grid-column-width': this.columnWidth + 'px',
      '--grid-gutter': this.gutter + 'px'
    });
  }
});
