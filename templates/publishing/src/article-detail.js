import './app-icons.js';
import { Polymer } from '../../../../polymer/lib/legacy/polymer-fn.js';

Polymer({
  _template: `
    <style>

      :host {
        display: block;
      }

      .image {
        height: 240px;
        background-repeat: no-repeat;
        background-position: center center;
        background-size: contain;
      }

      .header {
        position: relative;
        padding: 24px 0;
        text-align: center;
        font-size: 14px;
        letter-spacing: 1px;
        color: #999;
      }

      .title {
        padding: 16px 0;
        font-size: 30px;
        font-weight: 600;
      }

      paper-fab {
        position: absolute;
        top: -28px;;
        right: 40px;
        background-color: var(--app-primary-color);
      }

      .main {
        padding: 24px 80px;
        border-top: 1px solid #ddd;
        font-size: 18px;
        line-height: 32px;
        letter-spacing: 1px;
      }

      h3 {
        font-size: 24px;
        font-weight: 400;
        line-height: 32px;
      }

      /* narrow layout */
      @media (max-width: 808px) {

        .main {
          padding: 24px;
        }

        /* position fab to the bottom right corner of the screen */
        paper-fab {
          position: fixed;
          top: auto;
          right: 24px;
          bottom: 24px;
        }

      }

    </style>

    <div class="image" style\$="background-color: [[article.primaryColor]]; background-image: url('[[article.image]]')"></div>

    <div class="header">
      <div>[[article.author]]</div>
      <div class="title" style\$="color: [[article.secondaryColor]];">[[article.title]]</div>
      <div>[[article.date]]</div>
      <paper-fab icon="app:googleplus-reshare"></paper-fab>
    </div>

    <section class="main">
      <h3>{{article.desc}}</h3>
      <p>{{article.content}}</p>
    </section>
`,

  is: 'article-detail',

  properties: {

    article: Object

  }
});
