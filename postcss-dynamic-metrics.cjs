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

  Declaration: {

    'font-size': (node, { Declaration }) => {
      if (node.parent.nodes.some((item) => item.prop === 'letter-spacing')) return;

      const insert = (value) => {
        const declaration = new Declaration({
          prop: 'letter-spacing',
          value,
        });

        node.after(declaration);
      };

      if (/^[1-9]\d*px$/.test(node.value)) {
        const z = Number.parseInt(node.value, 10);
        const letterSpacing = a + b * (Math.E ** (c * z));

        const value = `${letterSpacing.toFixed(precision)}em`;
        insert(value);
      } else if (node.value === 'inherit') {
        insert(node.value);
      }
    },

  },
});

module.exports.postcss = true;
