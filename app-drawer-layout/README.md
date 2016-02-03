##&lt;app-drawer-layout&gt;

app-drawer-layout is a wrapper element that positions an app-drawer and other content. When
the viewport width is smaller than `responsiveWidth`, this element changes to narrow layout.
In narrow layout, the drawer will be stacked on top of the main content. The drawer will slide
in/out to hide/reveal the main content.


By default the drawer is on the left side of the screen:

```html
<app-drawer-layout>
  <app-drawer>
    <!-- drawer content -->
  </app-drawer>
  <div>
    <!-- main content -->
  </div>
</app-drawer-layout>
```

A drawer on the right side of the screen:

```html
<app-drawer-layout>
  <app-drawer position="right">
    <!-- drawer content -->
  </app-drawer>
  <div>
    <!-- main content -->
  </div>
</app-drawer-layout>
```

With an app-header-layout:

```html
<app-drawer-layout>
  <app-drawer>
    <!-- drawer content -->
  </app-drawer>
  <app-header-layout>
    <app-header>
      <app-toolbar>
        <div title>App name</div>
      </app-toolbar>
    </app-header>

    <!-- main content -->

  </app-header-layout>
</app-drawer-layout>
```

### Styling

Custom property                          | Description                          | Default
-----------------------------------------|--------------------------------------|---------
`--app-drawer-layout-content-transition` | Transition for the content container | none
