# App Layout

It's a set of experimental layout elements for your app. It includes:

- [app-toolbar](#app-toolbar)
- [app-header](#app-header)
- [app-header-layout](#app-header-layout)
- [app-drawer](#app-drawer)
- [app-drawer-layout](#app-drawer-layout)
- [app-scrim](#app-scrim)

### Install

```bash
$ bower install PolymerLabs/app-layout --save
```

app-toolbar
---------

app-toolbar is a horizontal bar containing items that can be used for
label, navigation, search and actions.

#### Example

Add a title to the toolbar
```html
<app-toolbar>
  <div title>App name</div>
</app-toolbar>
```

Add a button in the left and right side of the toolbar
```html
<app-toolbar>
  <paper-icon-button icon="menu"></paper-icon-button>
  <div title class="flex">App name</div>
  <paper-icon-button icon="search"></paper-icon-button>
</app-toolbar>
```

You can use the attributes `top-item` or `bottom-item` to completely fit an element
to the top or bottom of the toolbar respectively.

#### Styling app-toolbar

The following custom properties available for styling:

Custom property              | Description                  | Default
-----------------------------|------------------------------|-----------------------
`--app-toolbar-font-size`    | Toolbar font size            | 20px


app-header
---------

app-header is a container for app-toolbar. It can add effects to the toolbars based on the scroll position. 

#### Example

Condense the header when the user scrolls
```html
<app-header condenses>
  <app-toolbar>
    <div title>App name</div>
  </app-toolbar>
</app-drawer>
```

app-header-layout
---------

app-header-layout is a layout element that contains a header and a content.
This layout element uses the document scroll by default, but this element can 
also define its own scrolling region.

#### Example

Using the document scroll
```html
<app-header-layout>
  <app-header condenses waterfall>
    <app-toolbar>
      <div title>App name</div>
    </app-toolbar>
  </app-header>
  <div>
    <!-- content goes here -->
  </div>
</app-header-layout>
```

Using an own scrolling region
```html
<app-header-layout has-scrolling-region class="fit">
  <app-header condenses waterfall>
    <app-toolbar>
      <div title>App name</div>
    </app-toolbar>
  </app-header>
  <div>
    <!-- content goes here -->
  </div>
</app-header-layout>
```

app-drawer
---------

app-drawer is a navigation drawers that can slide in from the left, right, bottom or top.

#### Example

Add a drawer in the left side of the screen
```html
<app-drawer position="left" opened></app-drawer>
```

Add a drawer in the right side of the screen
```html
<app-drawer position="right" opened></app-drawer>
```

#### Styling

app-drawer has the following custom properties for styling:

Custom property                         | Description                            | Default
----------------------------------------|----------------------------------------|---------
`--app-drawer-background-color`         | Background color                       | white
`--app-drawer-duration`                 | The duration of the transition         | 0.2s
`--app-drawer-timing-function`          | The timing function of the transition  | linear


app-drawer-layout
---------

app-drawer-layout is a layout element that contains a drawer and a main content.
When the viewport width is smaller than `responsiveWidth`, this element changes
to narrow layout. In narrow layout, the drawer will be stacked on top of the main content.
The drawer will slide in/out to hide/reveal the main content.

#### Example

By default the drawer is in the left side of the screen

```html
<app-drawer-layout>
    <div drawer>
        <!-- drawer content -->
    </div>
    <div main>
        <!-- main content -->
    </div>
</app-drawer-layout>
```

app-scrim
---------

app-scrim is a transparent layer behind overlays that helps to create focus on the content.

#### Example

```html
<app-scrim visible></app-toolbar>
```

#### Styling

app-scrim has the following custom properties for styling:

Custom property             | Description            | Default
----------------------------|------------------------|----------------------
`--app-scrim-color`         | Scrim color            | black
`--app-scrim-opacity`       | Scrim opacity          | 0.5
