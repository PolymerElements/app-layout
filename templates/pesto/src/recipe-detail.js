import { Polymer } from '../../../../polymer/lib/legacy/polymer-fn.js';

Polymer({
  _template: `
    <style>

    :host {
      display: block;
      background-attachment: fixed;
      background-size: 100% auto;
      background-repeat: no-repeat;
    }

    #header {
      color: white;

      --app-header-background-rear-layer: {
        background-color: #00AA8D;
      };
    }

    paper-icon-button {
      color: white;
      --paper-icon-button-ink-color: white;
    }

    .card-container {
      position: relative;
      width: 720px;
      margin: 300px auto 40px;
    }

    paper-fab {
      position: absolute;
      top: -28px;
      right: 40px;

      --paper-fab-background: #EF5458;
      --paper-fab-keyboard-focus-background: #DF4448;
    }

    paper-card {
      padding: 16px 0 16px 100px;
      width: 100%;
      sizing: border-box;
    }

    paper-card p {
      margin: 12px 0;
      color: #999;
    }

    h4 {
      margin: 60px 0 12px;
    }

    .ingredient-item {
      margin: 20px 0;
      @apply --layout-horizontal;
    }

    .ingredient-amount {
      margin-left: -80px;
      width: 60px;
      padding-right: 20px;
      color: rgb(33, 169, 143);
      text-align: right;
    }

    .ingredient-name {
      @apply --layout-flex;
    }

    @media (max-width: 720px) {

      .card-container {
        width: 100%;
        margin: 150px 0 0;
      }

    }

    </style>

    <!-- main panel -->
    <app-header-layout>

      <app-header id="header" effects="waterfall fade-background" reveals="" slot="header">

        <!-- top toolbar -->
        <app-toolbar>
          <!-- back button -->
          <a href="#/home" tabindex="-1">
            <paper-icon-button icon="app:arrow-back"></paper-icon-button>
          </a>

          <div main-title=""></div>

          <paper-menu-button horizontal-align="right">
            <paper-icon-button icon="app:more-vert" slot="dropdown-trigger" alt="menu"></paper-icon-button>
            <paper-listbox class="dropdown-content">
              <paper-icon-item>
                <iron-icon icon="app:share" slot="item-icon"></iron-icon>
                Tweet recipe
              </paper-icon-item>
              <paper-icon-item>
                <iron-icon icon="app:email" slot="item-icon"></iron-icon>
                Email recipe
              </paper-icon-item>
              <paper-icon-item>
                <iron-icon icon="app:textsms" slot="item-icon"></iron-icon>
                Message recipe
              </paper-icon-item>
              <paper-icon-item>
                <iron-icon icon="app:group" slot="item-icon"></iron-icon>
                Share on Facebook
              </paper-icon-item>
            </paper-listbox>
          </paper-menu-button>
        </app-toolbar>

      </app-header>

      <div class="card-container">

        <paper-card heading="{{recipe.name}}">
          <div class="card-content">

            <p>{{recipe.description}}</p>

            <h4>Ingredients</h4>

            <template is="dom-repeat" items="{{recipe.ingredients}}">
              <div class="ingredient-item">
                <div class="ingredient-amount">{{item.amount}}</div>
                <div class="ingredient-name">{{item.description}}</div>
              </div>
            </template>

            <h4>Steps</h4>

            <template is="dom-repeat" items="{{recipe.steps}}">
              <div class="ingredient-item">
                <div class="ingredient-amount">{{item.duration}}</div>
                <div class="ingredient-name">{{item.description}}</div>
              </div>
            </template>

          </div>
        </paper-card>

        <paper-fab icon="{{__computeFavIcon(__favorite)}}" on-tap="__toggleFavorite"></paper-fab>
      </div>

    </app-header-layout>
`,

  is: 'recipe-detail',

  properties: {

    recipe: {
      type: Object,
      observer: '__recipeChanged'
    },

    __favorite: {
      type: Boolean,
      value: false
    }

  },

  __recipeChanged: function(recipe) {
    if (recipe) {
      this.style.backgroundImage = 'url(' + recipe.imageUrl + ')';
    }
  },

  __toggleFavorite: function(event, detail) {
    this.__favorite = !this.__favorite;
  },

  __computeFavIcon: function(favorite) {
    return favorite ? 'app:favorite' : 'app:favorite-border';
  }
});
