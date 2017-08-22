import { Polymer } from '../../../polymer/lib/legacy/polymer-fn.js';

Polymer({
  _template: `
    <style>

      a {
        text-decoration: none;
        font-size: inherit;
        color: inherit;
      }

      .toolbar {
        @apply --layout-horizontal;
        @apply --layout-end-justified;
        background-color: rgba(255, 255, 255, 0.95);
      }

      .tabs {
        height: 100%;
        @apply --layout-horizontal;
      }

      .tabs > a {
        @apply --layout-vertical;
        @apply --layout-center-center;
        margin: 12px 16px 12px;
        border-bottom: 1px solid #222;
      }

      header {
        @apply --layout-vertical;
        @apply --layout-center-center;
        height: calc(100vh - 64px);
        padding: 0 16px;
        background-image: url('//app-layout-assets.appspot.com/assets/landing-page/glass_explorer_food_2.png');
        backgrond-repeat: no-repeat;
        background-size: cover;
        color: white;
        text-align: center;
      }

      header > h2 {
        font-size: 56px;
        font-weight: 300;
        margin: 0;
      }

      header > p {
        font-size: 32px;
      }

      section {
        padding: 88px 16px;
      }

      .container {
        @apply --layout-horizontal;
        max-width: 800px;
        margin: 0 auto;
      }

      .container > * {
        @apply --layout-flex;
      }

      .container img {
        max-width: 100%;
        max-height: 100%;
      }

      .container h3 {
        font-size: 32px;
        font-weight: 300;
        margin: 24px 0;
      }

      .container p {
        line-height: 1.5;
      }

      @media (max-width: 600px) {
        .container {
          @apply --layout-vertical;
        }
      }

    </style>

    <app-header-layout>

      <app-header reveals="" effects="waterfall" slot="header">

        <app-toolbar class="toolbar">
          <div class="tabs">
            <a href="#about">About</a>
            <a href="#services">Services</a>
            <a href="#contact">Contact</a>
          </div>
        </app-toolbar>

      </app-header>

      <header>
        <h2>Welcome To Our Landing Page</h2>
        <p>Made with App Layout Elements</p>
      </header>

      <section id="about">
        <div class="container">
          <div>
            <img src="//app-layout-assets.appspot.com/assets/landing-page/berries.jpg">
          </div>
          <div>
            <h3>About</h3>
            <p>Lorem ipsum dolor sit amet, per in nusquam nominavi periculis, sit elit oportere ea. Lorem ipsum dolor sit amet, per in nusquam nominavi periculis, sit elit oportere ea.</p>
            <p>Convenire definiebas scriptorem eu cum. Sit dolor dicunt consectetuer no. Convenire definiebas scriptorem eu cum. Sit dolor dicunt consectetuer no.</p>
          </div>
        </div>
      </section>

      <section id="services">
        <div class="container">
          <div>
            <img src="//app-layout-assets.appspot.com/assets/landing-page/tomato.jpg">
          </div>
          <div>
            <h3>Services</h3>
            <p>Lorem ipsum dolor sit amet, per in nusquam nominavi periculis, sit elit oportere ea. Lorem ipsum dolor sit amet, per in nusquam nominavi periculis, sit elit oportere ea.</p>
            <p>Convenire definiebas scriptorem eu cum. Sit dolor dicunt consectetuer no. Convenire definiebas scriptorem eu cum. Sit dolor dicunt consectetuer no.</p>
          </div>
        </div>
      </section>

      <section id="contact">
        <div class="container">
          <div>
            <img src="//app-layout-assets.appspot.com/assets/landing-page/red-onion.jpg">
          </div>
          <div>
            <h3>Contact</h3>
            <p>Lorem ipsum dolor sit amet, per in nusquam nominavi periculis, sit elit oportere ea. Lorem ipsum dolor sit amet, per in nusquam nominavi periculis, sit elit oportere ea.</p>
            <p>Convenire definiebas scriptorem eu cum. Sit dolor dicunt consectetuer no. Convenire definiebas scriptorem eu cum. Sit dolor dicunt consectetuer no.</p>
          </div>
        </div>
      </section>

    </app-header-layout>
`,

  is: 'x-app'
});
