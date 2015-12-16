##&lt;app-toolbar&gt;

app-toolbar is a horizontal toolbar containing items that can be used for
label, navigation, search and actions.

Example:

Add a title to the toolbar.

```html
<app-toolbar>
  <div title>App name</div>
</app-toolbar>
```

Add a button to the left and right side of the toolbar.

```html
<app-toolbar>
  <paper-icon-button icon="menu"></paper-icon-button>
  <div title>App name</div>
  <paper-icon-button icon="search"></paper-icon-button>
</app-toolbar>
```

You can use the attributes `top-item` or `bottom-item` to completely fit an element
to the top or bottom of the toolbar respectively.

### Styling

Custom property              | Description                  | Default
-----------------------------|------------------------------|-----------------------
`--app-toolbar-font-size`    | Toolbar font size            | 20px
