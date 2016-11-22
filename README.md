# App Layout [![Build Status](https://travis-ci.org/PolymerElements/app-layout.svg?branch=master)](https://travis-ci.org/PolymerElements/app-layout) [![Published on webcomponents.org](https://img.shields.io/badge/webcomponents.org-published-blue.svg)](https://beta.webcomponents.org/element/PolymerElements/app-layout)

A collection of elements, along with guidelines and templates that can be used to structure your app’s layout.

<!---
```
<custom-element-demo height="368">
  <template>
    <script src="../webcomponentsjs/webcomponents-lite.min.js"></script>
    <link rel="import" href="app-drawer/app-drawer.html">
    <link rel="import" href="app-header/app-header.html">
    <link rel="import" href="app-toolbar/app-toolbar.html">
    <link rel="import" href="demo/sample-content.html">
    <link rel="import" href="../iron-icons/iron-icons.html">
    <link rel="import" href="../paper-icon-button/paper-icon-button.html">
    <link rel="import" href="../paper-progress/paper-progress.html">
    <style is="custom-style">
      html, body {
        margin: 0;
        font-family: 'Roboto', 'Noto', sans-serif;
        -webkit-font-smoothing: antialiased;
        background: #f1f1f1;
        max-height: 368px;
      }
      app-toolbar {
        background-color: #4285f4;
        color: #fff;
      }

      paper-icon-button {
        --paper-icon-button-ink-color: white;
      }

      paper-icon-button + [main-title] {
        margin-left: 24px;
      }
      paper-progress {
        display: block;
        width: 100%;
        --paper-progress-active-color: rgba(255, 255, 255, 0.5);
        --paper-progress-container-color: transparent;
      }
      app-header {
        @apply(--layout-fixed-top);
        color: #fff;
        --app-header-background-rear-layer: {
          background-color: #ef6c00;
        };
      }
      app-drawer {
        --app-drawer-scrim-background: rgba(0, 0, 100, 0.8);
        --app-drawer-content-container: {
          background-color: #B0BEC5;
        }
      }
      sample-content {
        padding-top: 64px;
      }
    </style>
    <next-code-block></next-code-block>
  </template>
</custom-element-demo>
```
-->
```html
<app-header reveals>
  <app-toolbar>
    <paper-icon-button icon="menu" onclick="drawer.toggle()"></paper-icon-button>
    <div main-title>My app</div>
    <paper-icon-button icon="delete"></paper-icon-button>
    <paper-icon-button icon="search"></paper-icon-button>
    <paper-icon-button icon="close"></paper-icon-button>
    <paper-progress value="10" indeterminate bottom-item></paper-progress>
  </app-toolbar>
</app-header>
<app-drawer id="drawer" swipe-open></app-drawer>
<sample-content size="10"></sample-content>
```

## Install

```bash
$ bower install PolymerElements/app-layout --save
```

## Import

```html
<link rel="import" href="/bower_components/app-layout/app-layout.html">
```

## Elements

- [app-box](/app-box) - A container element that can have scroll effects - visual effects based on scroll position.

- [app-drawer](/app-drawer) - A navigation drawer that can slide in from the left or right.

- [app-drawer-layout](/app-drawer-layout) - A wrapper element that positions an app-drawer and other content.

- [app-grid](/app-grid) - A helper class useful for creating responsive, fluid grid layouts using custom properties.

- [app-header](/app-header) - A container element for app-toolbars at the top of the screen that can have scroll effects - visual effects based on scroll position.

- [app-header-layout](/app-header-layout) - A wrapper element that positions an app-header and other content.

- [app-scrollpos-control](/app-scrollpos-control) - A manager for saving and restoring the scroll position when multiple pages are sharing the same document scroller.

- [app-toolbar](/app-toolbar) - A horizontal toolbar containing items that can be used for label, navigation, search and actions.

## Templates

The templates are a means to define, illustrate and share best practices in App Layout. Pick a template and customize it:

- [Getting started](/templates/getting-started) 
- [Landing page](/templates/landing-page)
- [Publishing: Zuperkülblog](/templates/publishing)
- [Shop: Shrine](/templates/shrine)
- [Blog: Pesto](/templates/pesto)
- [Scroll effects: Test drive](/templates/test-drive)

## Patterns

Sample code for various UI patterns:

- [Transform navigation](/patterns/transform-navigation/x-app.html)
As more screen space is available, side navigation can transform into tabs.

- [Expand Card](/patterns/expand-card/index.html)
Content cards may expand to take up more horizontal space.

## Users

Here are some web apps built with App Layout:
- [Google I/O 2016](https://events.google.com/io2016/)
- [Polymer summit](https://www.polymer-project.org/summit)
- [Pica](https://frankiefu.github.io/pica/)

## Tools and References

- [Responsive App Layout](https://www.polymer-project.org/1.0/toolbox/app-layout)
- [Polymer App Toolbox](https://www.polymer-project.org/1.0/toolbox/)
- [Material Design Adaptive UI Pattern](https://www.google.com/design/spec/layout/adaptive-ui.html#adaptive-ui-patterns)
