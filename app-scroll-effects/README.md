## Polymer.AppScrollEffectsBehavior

`Polymer.AppScrollEffectsBehavior` provides an interface that allows to consume scrolls events.
Effects are installed in the `Polymer.AppLayout.scrollEffects` namescape.

A few effects are defined in `app-scroll-effects.html`, but, by default, no effect is imported.
Thus, users need to explicitly import the dependency.

Elements that consume this behavior are required to override the folllowing methods:

* `_updateScrollState`
* `isOnScreen`
* `isContentBelow`
* `setup`

## Installing effects

Effects can be installed via the `effects` property. For example:

```html
<x-element effects="waterfall"></x-element>
```

## Configuring effects

For effects installed via the `effects` property, their configuration can be set
via the `effectsConfig` property. For example:

```html
<x-element effects="waterfall"
  effects-config='{"waterfall": {"startsAt": 0, "endsAt": 0.5}}'>
</x-element>
```

All effects have a `startsAt` and `endsAt` config property. They specify at what
point the effect should start and end. This value goes from 0 to 1 inclusive.
