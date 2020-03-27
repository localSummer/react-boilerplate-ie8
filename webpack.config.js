const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const es3ifyPlugin = require('es3ify-webpack-plugin')

const args = process.argv.slice(2)
const DEBUG = !(args[0] === '--release')
const VERBOSE = args[0] === '--verbose'

const config = {
  context: path.resolve(__dirname, './src'),

  entry: {
    app: ['./main.js'],
    vendor: [
      'es5-shim',
      'es5-shim/es5-sham',
      'babel-polyfill',
      'es6-promise',
      'react',
      'react-dom',
      'react-redux',
      'react-router',
    ],
  },

  output: {
    path: path.resolve(__dirname, 'build'),
    publicPath: '/',
    filename: 'assets/[name].js',
    chunkFilename: 'assets/[name].js',
    sourcePrefix: '  ',
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
    alias: {
      components: path.resolve(__dirname, './src/components/'),
      routes: path.resolve(__dirname, './src/routes/'),
      services: path.resolve(__dirname, './src/services/'),
      store: path.resolve(__dirname, './src/store/'),
    },
  },
  debug: DEBUG,
  cache: DEBUG,

  devtool: DEBUG ? 'source-map' : false,
  stats: {
    colors: true,
    reasons: DEBUG,
    hash: VERBOSE,
    version: VERBOSE,
    timings: true,
    chunks: VERBOSE,
    chunkModules: VERBOSE,
    cached: VERBOSE,
    cachedAssets: VERBOSE,
    children: false,
  },
  plugins: [
    // new es3ifyPlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: Infinity,
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': DEBUG ? '"development"' : '"production"',
      __DEV__: DEBUG,
      __BASENAME__: JSON.stringify(process.env.BASENAME || ''),
    }),
    new ExtractTextPlugin('assets/styles.css', {
      minimize: !DEBUG,
      allChunks: true,
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, './src/index.ejs'),
      filename: 'index.html',
      minify: !DEBUG
        ? {
          collapseWhitespace: true,
        }
        : null,
      hash: true,
    }),
  ],
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        include: [path.resolve(__dirname, 'src')],
        loader: 'babel-loader',
        query: {
          plugins: [],
        },
      },
      {
        test: /\.css/,
        loader: ExtractTextPlugin.extract(
          'style-loader',
          'css-loader?-autoprefixer&modules=true&localIdentName=[local]!postcss-loader',
        ),
      },
      {
        test: /\.less$/,
        loader: ExtractTextPlugin.extract(
          'style-loader',
          'css-loader?-autoprefixer!postcss-loader!less-loader',
        ),
      },
      {
        test: /\.json$/,
        loader: 'json-loader',
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg|woff|woff2)$/,
        loader: 'url-loader',
        query: {
          name: 'assets/[path][name].[ext]',
          limit: 10000,
        },
      },
      {
        test: /\.(eot|ttf|wav|mp3|ogg)$/,
        loader: 'file-loader',
        query: {
          name: 'assets/[path][name].[ext]',
        },
      },
    ],
  },
}

if (!DEBUG) {
  config.plugins.push(new es3ifyPlugin())
  config.plugins.push(new webpack.optimize.DedupePlugin())
}

const uglyOptions = !DEBUG
  ? {
    compress: {
      warnings: VERBOSE,
      screw_ie8: false,
    },
    mangle: {
      screw_ie8: false,
    },
    output: {
      screw_ie8: false,
    },
  }
  : {
    mangle: false,
    compress: {
      drop_debugger: false,
      warnings: VERBOSE,
      screw_ie8: false,
    },
    output: {
      beautify: true,
      comments: true,
      bracketize: true,
      indent_level: 2,
      keep_quoted_props: true,
      screw_ie8: false,
    },
  }

// config.plugins.push(new webpack.optimize.UglifyJsPlugin(uglyOptions))

if (!DEBUG) {
  config.plugins.push(new webpack.optimize.UglifyJsPlugin(uglyOptions))
  config.plugins.push(new webpack.optimize.AggressiveMergingPlugin())
  config.module.loaders
    .find(x => x.loader === 'babel-loader')
    .query.plugins.unshift(
      'transform-react-remove-prop-types',
      'transform-react-constant-elements',
      'transform-react-inline-elements',
      'transform-es3-modules-literals',
      'transform-es3-member-expression-literals',
      'transform-es3-property-literals',
    )
}

module.exports = config
