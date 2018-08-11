/**
 * React Static Boilerplate
 * https://github.com/koistya/react-static-boilerplate
 *
 * Copyright © 2015-2016 Konstantin Tarkus (@koistya)
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

const webpack = require('webpack')
const task = require('./task')
const webpackConfig = require('../webpack.config')

module.exports = task('bundle', new Promise((resolve, reject) => {
  const bundler = webpack(webpackConfig)
  const run = (err, stats) => {
    if (err) {
      reject(err)
    } else {
      console.log(stats.toString(webpackConfig.stats))
      resolve()
    }
  }
  bundler.run(run)
}))
