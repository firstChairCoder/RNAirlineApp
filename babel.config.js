module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          extensions: [
            '.js',
            '.jsx',
            '.ts',
            '.tsx',
            '.android.js',
            '.android.tsx',
            '.ios.js',
            '.ios.tsx'
          ],
          root: ['./'],
          alias: {
            '@assets': './assets',
            '@components': './src/components',
            '@constants': './src/constants',
            '@modules': './src/modules',
            '@navigation': './src/navigation',
            '@store': './src/store',
            '@translations': './src/translations',
            '@types': './src/types',
            "underscore": 'lodash'
          },
        },
      ],
      'react-native-reanimated/plugin'
    ],
  };
};
