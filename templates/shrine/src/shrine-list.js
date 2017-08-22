import './shrine-item.js';
import './shrine-featured-item.js';
import { Polymer } from '../../../../polymer/lib/legacy/polymer-fn.js';

Polymer({
  _template: `
    <style>

      :host {
        display: block;
        background-color: #f3f3f3;
        -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
      }

      .grid {
        @apply --layout-horizontal;
        @apply --layout-center-center;
        @apply --layout-wrap;
        margin-top: 10px;
      }

      .grid > .item {
        -webkit-flex: 1 calc(33% - 20px);
        flex: 1 calc(33% - 20px);
        max-width: calc(33% - 20px);
        height: 30vmax;
        min-height: 250px;
        margin: 10px;
        text-decoration: none;
        background-color: white;
      }

      /**
       * Desktop small, tablet
       */
      @media (max-width: 1200px) {
        .grid {
          padding-left: 10px;
          padding-right: 10px;
          font-size: 0.7em;
        }

        .grid > .item {
          -webkit-flex: 1 calc(50% - 20px);
          flex: 1 calc(50% - 20px);
          max-width: calc(50% - 20px);
          margin: 10px;
          text-decoration: none;
          background-color: white;
        }
      }

      /**
       * Phone
       */
      @media (max-width: 400px) {
        .grid {
          padding-left: 10px;
          padding-right: 10px;
        }

        .grid > .item {
          -webkit-flex: 1 calc(100% - 10px);
          flex: 1 calc(1000% - 10px);
          max-width: calc(100% - 10px);
          margin: 5px;
          text-decoration: none;
          background-color: white;
        }
      }

    </style>

    <shrine-featured-item item="[[featuredItem]]"></shrine-featured-item>

    <div class="grid">
      <template is="dom-repeat" items="[[items]]" sort="_sortItems" initial-count="1">
        <a href\$="#[[section]]/[[item.id]]" class="item" aria-label\$="More information about [[item.title]]">
          <shrine-item item="[[item]]"></shrine-item>
        </a>
      </template>
    </div>
`,

  is: 'shrine-list',

  properties: {

    items: {
      type: Array
    },

    featuredItem: {
      type: Object
    },

    section: {
      type: String
    }
  },

  _sortItems: function() {
    return Math.round(Math.random()*3) - 1;
  }
});
