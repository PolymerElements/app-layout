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

* **blend-background**
While scrolling down, fade in the rear background layer and fade out the front 
background layer (opacity interpolated based on scroll position).

* **fade-background**
Upon scrolling past a threshold, fade in the rear background layer and fade out
the front background layer (opacity CSS transitioned over time).

* **parallax-background**
Vertically translate the background based on a factor of the scroll position.

* **resize-title** 
Transform the font size of a designated title element between two values based 
on the scroll position.

* **resize-snapped-title**
Upon scrolling past a threshold, CSS transition the font size of a designated
title element between two values.

* **waterfall**
Toggles the shadow property in app-header when content is scrolled to create
a sense of depth between the element and the content underneath.

* **material**
Shorthand for the waterfall, resize-title, blend-background, and parallax-background 
effects.

## Styling

Mixin | Description | Default
----------------|-------------|----------
`--app-header-background-front-layer` | Applies to the front layer of the background | {}
`--app-header-background-rear-layer` | Applies to the rear layer of the background | {}
