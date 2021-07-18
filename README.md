# @selfage/tabs

## Install

`npm install @selfage/tabs`

## Overview

Written in TypeScript and compiled to ES6 with inline source map & source. See [@selfage/tsconfig ](https://www.npmjs.com/package/@selfage/tsconfig) for full compiler options. Provides generic helpers to navigator tabs.

## TabSwitcher

```TypeScript
import { TabSwitcher } from '@selfage/tabs/switcher';

let tabA = document.createElement('div');
tabA.style.display = 'none';
let tabB = document.createElement('div');
tabB.style.display = 'none';

let tabSwitcher = new TabSwitcher();
tabSwitcher.show(/* showTab= */ () => {
  tabA.style.display = 'block';
}, /* hideTab= */ () => {
  tabA.style.display = 'none';
});
// Now tabA is shown.
tabSwitcher.show(/* showTab= */ () => {
  tabB.style.display = 'block';
}, /* hideTab= */ () => {
  tabB.style.display = 'none';
});
// Now tabA is hidden and taB is shown.
```

Behind the scene, `show()` simply calls the previous `hideTab` callback function, calls the current `showTab` function, and keeps the current `hideTab` function for the next `show()`.
