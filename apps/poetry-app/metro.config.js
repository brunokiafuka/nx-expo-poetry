const { getDefaultConfig } = require('@expo/metro-config');
const { withNxMetro } = require('@nrwl/expo');

const defaultConfig = getDefaultConfig(__dirname);

module.exports = (async () => {
  defaultConfig.transformer.babelTransformerPath = require.resolve(
    'react-native-svg-transformer'
  );
  defaultConfig.resolver.assetExts = defaultConfig.resolver.assetExts.filter(
    (ext) => ext !== 'svg'
  );
  defaultConfig.resolver.sourceExts.push('svg');
  return withNxMetro(defaultConfig, {
    // Change this to true to see debugging info.
    // Useful if you have issues resolving modules
    debug: false,
    // all the file extensions used for imports other than 'ts', 'tsx', 'js', 'jsx'
    extensions: [],
  });
})();
