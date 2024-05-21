# @selfage/tabs

## Install

`npm install @selfage/tabs`

## Overview

Written in TypeScript and compiled to ES6 with inline source map & source. See [@selfage/tsconfig ](https://www.npmjs.com/package/@selfage/tsconfig) for full compiler options. Provides generic helpers to navigator tabs.

## TabSwitcher

Instead of tracking all tabs, it simply hides the tab previously shown and shows a new tab, thus a switcher.

```TypeScript
import { TabsSwitcher } from '@selfage/tabs/switcher';

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

## TabNavigator

An alternative way to navigator through tabs, requiring a `Tab` enum that contains all possible values. Especailly useful if the same tab needs an update.

```TypeScript
import { TabNavigator } from `@selfage/tabs/navigator`;

enum Tab {
  A = 1,
  B = 2,
  C = 3,
}

function showTab(tab?: Tab) {
  switch (tab) {
    ...
  }
}

function hideTab(tab?: Tab) {
  switch (tab) {
    ...
  }
}

function updateTab(tab?: Tab) {
  switch (tab) {
    ...
  }
}

let navigator = new TabNavigator((tab) => showTab(tab), (tab) => hideTab(tab), (tab) => updateTab(tab));
navigator.goTo(Tab.A);
```
