##&lt;app-header&gt;

app-header is container element for app-toolbars at the top of the screen that can have scroll
effects - visual effects based on scroll position. By default, an app-header moves away from
the viewport when scrolling down and if using `reveals`, the header slides back when scrolling
back up. For example,

```html
<app-header reveals>
  <app-toolbar>
    <div title>App name</div>
  </app-toolbar>
</app-header>
```

app-header can also condense when scrolling down. To achieve this behavior, the header
must have a larger height than the first toolbar in the light DOM. For example,

```html
<app-header style="height: 96px;" condenses fixed>
  <app-toolbar style="height: 64px;">
    <div title>App name</div>
  </app-toolbar>
</app-header>
```

Notice that when the header is condensed its height is `64px`, whereas the height is 96px 
if the user scrolls back up to the top.

## Scroll effects
The following effects can be installed via the `effects` property:

Effect name | Description
----------------|-------------
`parallax-background` | Adds a parallax effect.
`blend-background` | Blends the front and back backgrounds in the header.
`fade-background` | Fades the backgrounds when the header hits a threshold.
`resize-title` | Transforms the element with the attribute `title` into the element with the attribute `condensed-title` by resizing it.
`resize-snapped-title` | Fades the elements with the attributes `title` and `condensed-title` respectively.
`waterfall` | Controls the `shadow` property of `app-header` such that the shadow appears only when there is content below the header.

## Styling

Mixin | Description | Default
----------------|-------------|----------
`--app-header-background-front-layer` | Applies to the front layer of the background | {}
`--app-header-background-rear-layer` | Applies to the rear layer of the background | {}
