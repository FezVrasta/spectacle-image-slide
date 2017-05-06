import babel from 'rollup-plugin-babel';

export default {
  moduleName: 'SpectacleImageSlide',
  format: 'umd',
  globals: {
    react: 'React',
    'react-dom': 'ReactDOM',
    spectacle: 'Spectacle',
    'prop-types': 'PropTypes',
  },
  external: ['react', 'react-dom', 'spectacle', 'prop-types'],
  plugins: [
    babel({ exclude: 'node_modules/**' }),
  ],
};
