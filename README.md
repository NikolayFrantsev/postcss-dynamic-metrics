# PostCSS Dynamic Metrics

[PostCSS](https://postcss.org/) plugin to support [dynamic metrics](https://d.rsms.me/inter-website/v3/dynmetrics/) for font-size pixel declarations.

## Examples

Input:

```css
a {
  font-size: 18px;
}

b {
  font-size: 2em;
}
```

Output:

```css
a {
  font-size: 18px;
  letter-spacing: -0.014em;
}

b {
  font-size: 2em;
}
```

## Installation

Install package:

```sh
npm install postcss-dynamic-metrics --save-dev
```

Update PostCSS configuration:

```js
const DynamicMetrics = require('postcss-dynamic-metrics');

module.exports = {
  plugins: [
    DynamicMetrics({
      // a = -0.0223,
      // b = 0.185,
      // c = -0.1745,

      // precision = 3,
    }),
  ],
};
```