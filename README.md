# distr
Smartly change src path to dist path, for use in small build systems.

## Installation

```Bash

$ npm i distr;

```

## Configuration

```JavaScript

  {
    source: 'src', // directory fragment to target can be RegExp: /src|source/
    destination: 'dist', // new name to use
    limit:1 // number of replacements to make
  }

```

## Example

```JavaScript

const distr = require(distr);

  distr('./src/www/index.html');
  //-> ./dist/www/index.html

  distr('./sources/widgets/upload-component/src/index.js', {source:/sources|src/, limit:2});
  //-> ./dist/widgets/upload-component/dist/index.js

```
