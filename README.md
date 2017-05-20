# react-hide-show-utils
> React utility components for showing or hiding children components, based on media queries.

Based and inspired on what's suggested by the `<HideAt>` and `<ShowAt>` components shown 
in [this block of code](https://medium.com/airbnb-engineering/rearchitecting-airbnbs-frontend-5e213efc24d2#d5f9) from [this AirBnb Engineering's blog post](https://medium.com/airbnb-engineering/rearchitecting-airbnbs-frontend-5e213efc24d2).

## How do they work?
These components use the browser's [`window.matchMedia API`](https://developer.mozilla.org/en-US/docs/Web/API/window/matchMedia) internally to be 
[notified when a media query is active](https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries/Testing_media_queries#Receiving_query_notifications)
and hide or show their children accordingly.

Because of this:

* These components only work on the browser. Which means, for now, **they do not support server-side rendering**.
* Since it uses `matchMedia`, you might need a polyfill for [support in legacy browsers (like IE9)](http://caniuse.com/#feat=matchmedia).
  * I suggest to consider using the [polyfill.io service](https://polyfill.io/).

## Usage:

### Install
_For now, it's not available through npm, but can still be easily installed:_

`package.json`:
```json
{
  "dependencies": {
    "react-hide-show-utils": "git+https://github.com/berbaquero/react-hide-show-utils.git#0.0.2"
  }
}
```
Note the `#0.0.x` at the end — refers to the version of the package you'll install.

### Using the components

#### `<HideAt>`:

Un-mounts the children declared inside it, when the breakpoint becomes active.
And logically, it renders it again when it becomes active again.

Note: before the component is even mounted for the first time,
the breakpoint is checked, to determine whether it's active or not.
Therefore, the component will not even be rendered initially, if the breakpoint is active then.

##### Example:

```js
import react from 'react';
import { HideAt } from 'react-hide-show-utils';

<HideAt breakpoint="(min-width: 32em)">
 <Button
   text="I'm not rendered on wide viewports!"
 /> 
</HideAt>
```

#### `<ShowAt>`:

WIP.
