![wallpaper](image.png)

# The modernizr project

[![NPM](https://img.shields.io/npm/v/modernizr.svg)](https://www.npmjs.com/package/modernizr) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## What is about?

The idea of this project is develop a modern kit of components for react and publish it as a npm package.

The components should has a good ux, and should be responsive, in such a way that it looks good on any device and that the user likes to browse the web where the components are used.

## What is the use of this project?

You can take use of the components, installing the package and use it in your web project.

## About the license

This project is licensed under the [ISC license](https://github.com/nilis24/custom-components/blob/master/LICENSE), so everyone can use it taking into account the permissions of the license.

ISC © [nilis24](https://github.com/nilis24)

## How you can contribute

If you want to contribute, read [CONTRIBUTING.md](CONTRIBUTING.md) and follow the rules explained in the file.

## Who maintains and contributes to this project?

Everyone can maintain and contribute to this project.

## Install

```bash
npm install --save modernizr
```

## Usage

```tsx
import React, { Component } from 'react'

import MyComponent from 'modernizr'
import 'modernizr/dist/index.css'

class Example extends Component {
  render() {
    return <MyComponent />
  }
}
```
