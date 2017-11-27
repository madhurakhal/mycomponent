// import rollup from 'rollup';
import nodeResolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import uglify from 'rollup-plugin-uglify';


const plugins = [
  nodeResolve({
    jsnext: true,
    module: true,
    extensions: ['.js']
  }),
  commonjs({
    include: 'node_modules/**'
  })
];


let dest = 'bundles/bundle.umd.js';

if (process.env.BUNDLE_MIN === 'true') {
  dest = 'bundles/bundle.umd.min.js';
  plugins.push(
    uglify()
  );
}

export default {
  entry: 'esm/index.js',
  dest: dest,
  format: 'umd',
  moduleName: 'cargosteps',
  external: [
    '@angular/core',
    'rxjs/**/*.js'
  ],
  plugins: plugins
}