# use-lazyload-ref

[![npm version](https://badge.fury.io/js/use-lazyload-ref.svg)](https://badge.fury.io/js/use-lazyload-ref) ![CI Status](https://github.com/saitoeku3/use-lazyload-ref/workflows/Node%20CI/badge.svg)

> Custom hook to use lazy load easily

## Install

```
$ npm install use-lazyload-ref
$ yarn add use-lazyload-ref
```

## Usage

```jsx
import React from 'react'
import useLazyloadRef from 'use-lazyload-ref'

const Component = ({ url }) => {
  const [ref, isLoaded] = useLazyloadRef()

  return (
    <>
      {isLoaded || <Skeleton />}
      <img ref={ref} data-src={url}>
    <>
  )
}
```

## License

MIT © saitoeku3
