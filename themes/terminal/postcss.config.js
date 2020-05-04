const url = require("postcss-url");
const imports = require("postcss-import");
const nested = require("postcss-nested");
const postCSSPresetEnv = require("./node_modules/postcss-preset-env");
const browsers = require("browserslist");
const cssnano = require("cssnano");
const color = require("./node_modules/postcss-color-mod-function");
const mixins = require("./node_modules/postcss-mixins");

module.exports = () => ({
  plugins: [
    url,
    imports,
    mixins,
    nested,
    postCSSPresetEnv({
      stage: 1,
      preserve: true,
      features: {
        "custom-properties": true,
      },
    }),
    cssnano({
      preset: "default",
    }),
    color,
  ],
});
