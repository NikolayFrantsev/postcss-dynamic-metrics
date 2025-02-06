/*
 * dynamic metrics for font-size pixel declarations
 * <https://d.rsms.me/inter-website/v3/dynmetrics/>
 */

module.exports = ({
  a = -0.0223,
  b = 0.185,
  c = -0.1745,

  precision = 3,
} = {}) => ({
  postcssPlugin: 'postcss-dynamic-metrics',

  Declaration(node, { Declaration }) {
    if (node.prop === 'font-size'
      && /^\d+px$/.test(node.value)
    ) {
      const z = Number.parseInt(node.value, 10);

      const letterSpacing = a + b * (Math.E ** (c * z));

      const declaration = new Declaration({
        prop: 'letter-spacing',
        value: `${letterSpacing.toFixed(precision)}em`,
      });
      node.after(declaration);
    }
  },
});

module.exports.postcss = true;
