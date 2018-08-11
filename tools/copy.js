/**
 * React Static Boilerplate
 * https://github.com/koistya/react-static-boilerplate
 *
 * Copyright © 2015-2016 Konstantin Tarkus (@koistya)
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

const task = require('./task')
const fs = require('fs-extra')

/**
 * Copies static files such as robots.txt, favicon.ico to the
 * output (build) folder.
 */
module.exports = task('copy', fs.copy('./src/static', './build'))
