# React Scenes v2 🌉

**React Scenes is a simple way to create/test your react components inside your app.**

### Why?

We tried lots of tools to simplify our in-house react component creation process, most of the tools either has separate build process or not enough feature set. React Scenes is more simple, easy to use, flexible and does not need a separate build process, it is plug and play.

### Installation

`npm install react-scenes --save`

---

## Usage

### Scenes

Libraries is just a react component that uses `Scenes`, you can point any route to any library just like normal pages.

```javascript
import { Scenes } from "react-scenes";

import * as all from "./scenes";

let scenes = Object.keys(all).map(key => all[key]);

class Library extends Component {
  render() {
    return (
      <Scenes
        title="My Library"
        config={{
          caching: true
        }}
        scenes={scenes}
      />
    );
  }
}
```

#### title `string`

> Library Title.

#### scenes `array`

> Scenes.

#### config `object`

##### caching `boolean`

This is the default state of caching, can be enable/disable from UI.

#### actions `array`

> _check for more: custom actions_

#### panels `array`

> _check for more: custom panels_

#### devices `array`

> _check for more: custom devices_

---

### Scene

> Example scene

```javascript
import { controllers } from "react-scenes";

export default {
  title: "Hello",
  target: Bar, // or as function ({ props, state, setState }) => {}
  controllers: [
    {
      key: "title",
      title: "My title",
      controller: controllers.text("hello")
    }
  ],
  events: ["onClick"],
  options: {
    centered: true,
    bg: "light" // light, dark, white, black
  },
  docs: `## Bar
  **Hello World**
  `
};
```

#### title `string` `required`

> Title of your component.  
> You can also make titles nested like **Buttons>Normal**.

#### target `React Component or function` `required`

> Your Component. You can either give your component directly or you can pass a functions.

```
target: ({props, state, setState, pushEvent}) => {
  return (
    <div>
      <Button {...props}>{props.title}</Button>
    </div>
)}
```

#### controllers `array`

> All the controllers your component need. They will be passed to your component as their props.

#### events `array`

> Events you want to track.

#### options `object`

> Two options are available. `theme` and `centered` (makes component centered in viewport with flexbox).

#### docs `string`

> Component documentation or notes.

---

## Built-in Features

### Panels

We provide 4 panels;
You can also add custom panels _check for more: custom panels_
Every panel can has its own specific actions _check for more: custom panel actions_

#### Scenes 🗂

All scenes you have will appear in here.

#### Controllers 🎚

Conrollers are your main tools to alter your component without direct input.

We provide 10 default controllers; `text`,`textarea`,`select`,`boolean`,`integer`,`float`,`range`,`object`,`array`,`color`

##### text

> `controllers.text("Hello World")`

##### textarea

> `controllers.textarea("Hello \n World")`

##### select

> `controllers.select("primary", ["primary", "destructive"])`

or you can add as key,value

```
controllers.select("primary", [
  {key:"Primary, value:"primary"},
  {key:"Positive, value:"positive"}
])
```

##### boolean

> `controllers.boolean(true, true)` > _if you set second argument it will include `null` to controller cycle._

##### integer

> `controllers.integer(42)`

##### float

> `controllers.float(42.1)`

##### range

> `controllers.range(42.1)`

##### object

> `controllers.object({foo:"bar"})`

##### array

> `controllers.array([1,2,3])`

##### color

> `controllers.color("#000","hex" // hex, rgb, rgba)`

#### Events 🚀

> Track your components events, just add event props to your scenes as an array.

#### Code 📤

> This converts your components code to string for easy sharing.

#### Docs 📓

> Docs are can be component documentation or any other notes. (markdown supported).

---

## Customize

### Custom Panels

We exposed all props internally so you can access to alter anything you like.

```javascript
<Scenes
  ...
  panels={[
    {
        _id: "my-apples",
        component: MyApples,
        active: ({ get }) => get("active").panel == "my-panel",
        icon: "🍎",
        actions: [
          {
            _id: "toggle-apple-color",
            icon: ({ get })=> get("config").options.apple == "green" ? "🍏" : "🍎",
            active: ({ get }) => get("config").options.apple == "green",
            onClick: ({ set }) => {
              set("config",{
                options:{
                  ...get("config").options,
                  centered: props.options.apple == "green" ? "red" : "green"
                }
              });
            }
          }
        ]
    }
  ]}
/>
```

### Custom Controllers

Example: myApp/.../myCustomController.js

```javascript
import React, { Component } from "react";

export default (initialValue, foo, bar) => {
  return {
    type: "customController",
    initialValue,
    process: val => val,
    input: (value, set, title, state, setState) => {
      return (
        <div className="custom-controller">
          <input
            value={value}
            onChange={e => set(e.target.value)}
            onFocus={e => setState({ focused: true })}
            onBlur={e => setState({ focused: false })}
          />
          {focused ? "Focused" : "Not Focused"}
        </div>
      );
    }
  };
};
```

There is 4 props you can use;

- `type` `string` is just and identifier.

- `initialValue` `anything` is the initial value of the input.

- `process` `function` can be use to alter the input value.

- `input` `function` has `value`, `set`, `title`, `state`, `setState` to update your data and state of your controller.

#### Usage

Example: someScene.js

```
import customController from "../myCustomController";

export default {
  title: "Hello",
  target: Bar,
  controllers: [
    {
      key: "data",
      title: "My Data",
      controller: customController("hello", "foo", "bar")
    }
  ]
};
```

### Custom Devices

to add custom device sizes, inject it to `Scenes` like below.

```javascript
<Scenes
  ...
  devices={{
    iphonex: {
      title: "iPhone X",
      width: 375,
      height: 812
    },
    iphoneflex: {
      title: "iPhone Flex",
      width: "375px",
      height: "100%",
      unit: ""
    }
  }}
/>
```

---

## Contribute

Pull requests are welcome and please submit bugs 🐛.

## Contact

- Follow [@doubco](https://twitter.com/doubco) on Twitter
- Follow [@doubco](http://facebook.com/doubco) on Facebook
- Follow [@doubco](http://instagram.com/doubco) on Instagram
- Email <mailto:hi@doub.co>

## Inspirations

- [storybook](https://storybook.js.org)
- [react-demo](https://github.com/rpominov/react-demo)
