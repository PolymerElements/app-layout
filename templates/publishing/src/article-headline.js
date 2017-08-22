import { Polymer } from '../../../../polymer/lib/legacy/polymer-fn.js';

Polymer({
  _template: `
    <style>

      :host {
        font-size: 22px;
        line-height: 32px;
      }

      a {
        @apply --layout-vertical;
        height: 100%;
        text-decoration: none;
      }

      .image {
        @apply --layout-flex;
        background-repeat: no-repeat;
        background-position: center center;
        background-size: contain;
      }

      .title {
        height: 56px;
        @apply --layout-horizontal;
        @apply --layout-center-center;
        padding: 0 8px;
        text-align: center;
        letter-spacing: 0.8px;
        color: #fff;
      }

    </style>

    <a href\$="[[href]]">
      <div class="image" style\$="background-color: [[article.primaryColor]]; background-image: url('[[article.image]]');"></div>
      <div class="title" style\$="background-color: [[article.secondaryColor]];">[[article.title]]</div>
    </a>
`,

  is: 'article-headline',

  properties: {

    article: Object,

    href: String

  }
});
