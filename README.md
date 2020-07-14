# use-lazyload-ref

[![GitHub license](https://img.shields.io/badge/license-MIT-green.svg)](https://github.com/saitoeku3/use-lazyload-ref/blob/master/LICENSE) [![npm version](https://badge.fury.io/js/use-lazyload-ref.svg)](https://badge.fury.io/js/use-lazyload-ref) ![CI Status](https://github.com/saitoeku3/use-lazyload-ref/workflows/Node%20CI/badge.svg)

> Custom hook to use lazyload easily

## Installation

```
$ npm install use-lazyload-ref
$ yarn add use-lazyload-ref
```

## Usage

To enable lazy loading, simply specify `ref` and `data-src` attributes.

```jsx
import React from 'react'
import useLazyloadRef from 'use-lazyload-ref'

const Component = ({ url }) => {
  const [ref, hasLoaded] = useLazyloadRef()

  return (
    <div>
      {hasLoaded || <Skeleton />}
      <img ref={ref} data-src={url} />
      {/* <audio ref={ref} data-src={url} />*/}
      {/* <iframe ref={ref} data-src={url} />*/}
      {/* <video ref={ref} data-src={url} />*/}
      {/* <div style={{ backgroundImage: `url(${url})` }}></div>*/}
    </div>
  )
}
```

## API

### `useLazyloadRef: () => [(node: HTMLElement | null) => void, boolean]`

Custom hook.
In addition to `src` in `audio`, `iframe`, `img` and `video`, CSS property `background-image` can be lazy loaded.

```jsx
const [ref, hasLoaded] = useLazyloadRef()
```

`useLazyloadRef` returns a callback ref function and a load state.

- `ref`: Initialize observer for lazyload.
- `hasLoaded`: Default is false. Turn true if the source has finished loading.

## License

MIT
