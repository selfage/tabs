# @selfage/tabs

## Install

`npm install @selfage/tabs`

## Overview

Written in TypeScript and compiled to ES6 with inline source map & source. See [@selfage/tsconfig ](https://www.npmjs.com/package/@selfage/tsconfig) for full compiler options. Provides generic helpers to navigator tabs.

## TabSwitcher

Instead of tracking all tabs, it simply hides the tab previously shown and shows a new tab, thus a switcher.

```TypeScript
import { TabsSwitcher } from '@selfage/tabs';

let tabA: HTMLDivElement;
let tabB: HTMLDIvElement;

let tabsSwitcher = new TabsSwitcher();
tabsSwitcher.show(/* showTab= */ () => {
  tabA.style.display = 'block';
}, /* hideTab= */ () => {
  tabA.style.display = 'none';
});
// Now tabA is shown.
tabsSwitcher.show(/* showTab= */ () => {
  tabB.style.display = 'block';
}, /* hideTab= */ () => {
  tabB.style.display = 'none';
});
// Now tabA is hidden and taB is shown.
```
