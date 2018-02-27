import { Polymer } from '../../../polymer/lib/legacy/polymer-fn.js';
import { html } from '../../../polymer/polymer.js';

/**
@license
Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
Polymer({
  _template: html`
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
