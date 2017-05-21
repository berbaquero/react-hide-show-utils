# react-hide-show-utils
> React utility components for showing or hiding children components, based on media queries.

Based and inspired on what's suggested by the `<HideAt>` and `<ShowAt>` components shown 
in [this block of code](https://medium.com/airbnb-engineering/rearchitecting-airbnbs-frontend-5e213efc24d2#d5f9) 
from [this AirBnb Engineering's blog post](https://medium.com/airbnb-engineering/rearchitecting-airbnbs-frontend-5e213efc24d2).

## How are these useful?

Even though hiding or showing components can easily be done with just CSS as well,
they would still be part of the DOM, which can complicate things in some not-so-rare situations.

With these utility components, the children element **will actually be added/removed from the DOM**.
This avoids possible redundant elements at the same tie, and results in a leaner DOM.

## How do they work?

These components use the browser's [`window.matchMedia API`](https://developer.mozilla.org/en-US/docs/Web/API/window/matchMedia) internally to be 
[notified when a media query is active](https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries/Testing_media_queries#Receiving_query_notifications)
and hide or show their children accordingly.

Because of this:

* These components only work on the browser. Which means, for now, **they do not support server-side rendering**.
* Since it uses `matchMedia`, you might need a polyfill for [support in legacy browsers (like IE9)](http://caniuse.com/#feat=matchmedia).
  * I suggest to consider using the [polyfill.io service](https://polyfill.io/).
  
Using `matchMedia` saves us from having to listen to and manage the window's `resize` event,
and all the complications that come with it.

## Install

```bash
# via npm
npm i --save react-hide-show-utils

# via yarn
yarn add react-hide-show-utils
```

## Usage

### `<HideAt>`

Un-mounts the children inside it, when the declared breakpoint becomes active.
And logically, it mounts it again when the breakpoint becomes inactive again.

#### Example

```jsx
import { HideAt } from 'react-hide-show-utils';

<HideAt breakpoint="(min-width: 32em)">
 <Button
   text="I'm not rendered on wide viewports!"
 /> 
</HideAt>
```

### `<ShowAt>`

Mounts the children component inside, when the declared breakpoint becomes active.
And logically, it un-mounts it when the breakpoint becomes inactive again.

```jsx
import { ShowAt } from 'react-hide-show-utils';

<ShowAt breakpoint="(max-width: 8em)">
 <h1>I'm only shown on narrow viewports!</h1>
</ShowAt>
```

### Notes

* Before the children component is even mounted for the first time,
the breakpoint is checked, to determine whether it's active or not.
Therefore, the children will not even be rendered initially,
if it's not meant to based on the utility used and breakpoint declared.

* For now, if you want pass more than one element as children, you must wrap them all
in an appropriate wrapper element - like a `<div>`.
  
  Example:
  ```jsx
  // this is not possible - will warn and break
  <HideAt breakpoint="(min-width: 20em)">
   <MyComponent myProp={prop}/>
   <button onClick={handler}>I will break the app</button>
  </HideAt>

  // how to handle it - notice the <div> wrapping the children
  <HideAt breakpoint="(min-width: 20em)">
   <div>
    <MyComponent myProp={prop}/>
    <button onClick={handler}>All is fine now</button>
   </div>
  </HideAt>
  ```

  These utility components were designed this way to keep them simple and small, and with only one single responsibility.
