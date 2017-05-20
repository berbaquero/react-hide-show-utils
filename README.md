# react-responsive-utils
React components for showing or hiding children components, based on media queries.

Based and inspired on what's suggested by the `<HideAt>` and `<ShowAt>` components shown 
in [this block of code](https://medium.com/airbnb-engineering/rearchitecting-airbnbs-frontend-5e213efc24d2#d5f9) from [this AirBnb Engineering's blog post](https://medium.com/airbnb-engineering/rearchitecting-airbnbs-frontend-5e213efc24d2).

## Utility Components:

### `<HideAt>`:

#### Usage:

```js
<HideAt breakpoint="(min-width: 32em)">
 <Button
   text="I'm not rendered on wide viewports!"
 /> 
</HideAt>
```

### `<ShowAt>`:

WIP.
