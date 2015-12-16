##&lt;app-header-layout&gt;

app-header-layout lays out an app-header and a content. This element uses the document scroll
by default, but it can also define its own scrolling region.

Using the document scroll:

```html
<app-header-layout>
  <app-header fixed condenses effects="waterfall">
    <app-toolbar>
      <div title>App name</div>
    </app-toolbar>
  </app-header>
  <div>
    <!-- content goes here -->
  </div>
</app-header-layout>
```

Using an own scrolling region:

```html
<app-header-layout has-scrolling-region style="width: 300px; height: 400px;">
  <app-header fixed condenses effects="waterfall">
    <app-toolbar>
      <div title>App name</div>
    </app-toolbar>
  </app-header>
  <div>
    <!-- content goes here -->
  </div>
</app-header-layout>
```
