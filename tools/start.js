/**
 * React Static Boilerplate
 * https://github.com/koistya/react-static-boilerplate
 *
 * Copyright © 2015-2016 Konstantin Tarkus (@koistya)
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

const path = require("path");
const browserSync = require("browser-sync");
const webpack = require("webpack");
const webpackDevMiddleware = require("webpack-dev-middleware");
const webpackHotMiddleware = require("webpack-hot-middleware");
const task = require("./task");
const webpackConfig = require("../webpack.config");
const url = require("url");
const proxy = require("proxy-middleware");
const proxyOptions = url.parse("http://192.168.110.85/dic");
proxyOptions.route = "/dic";

task(
  "start",
  () =>
    new Promise(resolve => {
      // Hot Module Replacement (HMR) + React Hot Reload
      if (webpackConfig.debug) {
        webpackConfig.entry.vendor.unshift(
          "react-hot-loader/patch",
          "webpack-hot-middleware/client"
        );
        webpackConfig.module.loaders
          .find(x => x.loader === "babel-loader")
          .query.plugins.unshift("react-hot-loader/babel");
        webpackConfig.plugins.push(new webpack.HotModuleReplacementPlugin());
        webpackConfig.plugins.push(new webpack.NoErrorsPlugin());
      }

      const bundler = webpack(webpackConfig);

      browserSync({
        port: Number(process.env.PORT || 3000),
        ui: {
          port: Number(process.env.PORT || 3000) + 1
        },
        server: {
          baseDir: "./src",

          middleware: [
            webpackDevMiddleware(bundler, {
              // IMPORTANT: dev middleware can't access webpackConfig, so we should
              // provide publicPath by ourselves
              publicPath: webpackConfig.output.publicPath,

              // pretty colored output
              stats: webpackConfig.stats

              // for other settings see
              // http://webpack.github.io/docs/webpack-dev-middleware.html
            }),

            // bundler should be the same as above
            webpackHotMiddleware(bundler),

            // Serve index.html for all unknown requests
            (req, res, next) => {
              if (req.headers.accept.startsWith("text/html")) {
                const filename = path.join(bundler.outputPath, "index.html");
                bundler.outputFileSystem.readFile(filename, (err, result) => {
                  if (err) {
                    next(err);
                    return;
                  }
                  res.setHeader("Content-Type", "text/html");
                  res.end(result);
                });
              }
              next();
            },
            proxy(proxyOptions)
          ]
        },

        // no need to watch '*.js' here, webpack will take care of it for us,
        // including full page reloads if HMR won't work
        files: ["build/**/*.css", "build/**/*.html"]
      });

      resolve();
    })
);
