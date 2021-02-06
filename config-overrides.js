const rewireAliases = require('react-app-rewire-aliases');
const { paths } = require('react-app-rewired');
const path = require('path');

/* config-overrides.js */
module.exports = function override(config, env) {
    config = rewireAliases.aliasesOptions({
        '@layout': path.resolve(__dirname, `${paths.appSrc}/layout/`),
        '@components': path.resolve(__dirname, `${paths.appSrc}/components/`),
        '@tool': path.resolve(__dirname, `${paths.appSrc}/tool/`),
    })(config, env);
    return config;
}
