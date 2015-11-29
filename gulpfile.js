var elixir = require('laravel-elixir')
var poststylus = require('poststylus')
var rupture = require('rupture')

require('laravel-elixir-vueify')
require('laravel-elixir-stylus')

/*
 |--------------------------------------------------------------------------
 | Elixir Asset Management
 |--------------------------------------------------------------------------
 |
 | Elixir provides a clean, fluent API for defining some basic Gulp tasks
 | for your Laravel application. By default, we are compiling the Sass
 | file for our application, as well as publishing vendor resources.
 |
 */

elixir(function (mix) {
  mix
    .browserify('app.js')
    .stylus('app.styl', null, {
      use: [
        poststylus(['postcss-axis', 'postcss-position']), rupture()
      ]
    })
    .version([
      '/js/app.js',
      '/css/app.css'
    ])
    .browserSync({
      reloadDelay: 1000,
      port: 3000
    })
})
