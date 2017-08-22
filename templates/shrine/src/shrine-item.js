import { Polymer } from '../../../../polymer/lib/legacy/polymer-fn.js';

Polymer({
  _template: `
    <style>

      :host {
        @apply --layout-vertical;
        @apply --layout-center-center;
        position: relative;
        text-align: center;
        width: 100%;
        height: 100%;
        --paper-icon-button-ink-color: #31f0ef;
      }

      .pic {
        width: 50%;
        height: 50%;
        background-size: contain;
        background-repeat: no-repeat;
        background-position: 50% 50%;
        transition: opacity 0.5s;
        margin-top: 40px;
      }

      .link {
        transition: opacity 0.5s;
        font-family: 'Abril Fatface', cursive;
        font-size: 2em;
        color: #0a3142;
      }

      .price {
        position: absolute;
        top: 20px;
        right: 20px;
        font-size: 1em;
        color: #111;
        font-weight: bold;
      }

      .author {
        font-size: 11px;
        color: #000;
        line-height: 5em;
      }

      .author img {
        width: 30px;
        height: 30px;
        border-radius: 50% 50%;
        display: inline-block;
        vertical-align: middle;
        margin-right: 10px;
      }

      .icons {
        position: absolute;
        top: 12px;
        left: 12px;
        transition: opacity 0.5s;
      }

      iron-icon {
        width: 20px;
        height: 20px;
        color: #666;
        margin: 5px;
      }

      :host::after {
        content: "";
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        opacity: 0;
        transition: opacity 0.5s;
        pointer-events: none;
        /* create a layer to only invalidate this layer for :hover */
        transform: translateZ(0);
      }

      :host:hover::after {
        opacity: 1;
      }

    </style>

    <div class="pic" style\$="background-image: url([[item.imageUrl]]);"></div>
    <h2 class="link">[[item.title]]</h2>
    <span class="price">[[item.price]]</span>

    <div class="author">
      <img src="[[item.storeAvatarUrl]]">
      [[item.storeName]]
    </div>
`,

  is: 'shrine-item',

  properties: {

    item: {
      type: Object
    }

  }
});
