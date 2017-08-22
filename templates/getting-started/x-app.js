import { Polymer } from '../../../polymer/lib/legacy/polymer-fn.js';

Polymer({
  _template: `
    <style>

      app-header {
        background-color: #00897B;
        color: #fff;
      }

      paper-icon-button {
        --paper-icon-button-ink-color: white;
      }

      app-drawer-layout:not([narrow]) [drawer-toggle] {
        display: none;
      }

    </style>

    <app-drawer-layout>

      <app-drawer slot="drawer">
        <app-toolbar>Getting Started</app-toolbar>
      </app-drawer>

      <app-header-layout>

        <app-header slot="header" reveals="" effects="waterfall">
          <app-toolbar>
            <paper-icon-button icon="menu" drawer-toggle=""></paper-icon-button>
            <div main-title="">Title</div>
          </app-toolbar>
        </app-header>

        <sample-content size="100"></sample-content>

      </app-header-layout>

    </app-drawer-layout>
`,

  is: 'x-app'
});
