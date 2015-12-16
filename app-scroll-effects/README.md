## Polymer.AppScrollEffectsBehavior

`Polymer.AppScrollEffectsBehavior` provides an interface that allows to consume scrolls events.
Effects are installed in the `Polymer.AppScrollEffects` namescape.

A few effects are defined in `app-scroll-effects.html`, but, by default, no effect is imported. 
Thus, users need to explicitly import the dependency.

Elements that consume this behavior are required to override the folllowing methods:

* `_updateScrollState`
* `isOnScreen`
* `isContentBelow`
* `setup`