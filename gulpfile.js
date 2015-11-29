var elixir = require('laravel-elixir')

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
    .stylus('app.styl')
    .version([
      '/js/app.js',
      '/css/app.css'
    ])
    .browserSync({
      reloadDelay: 1000,
      port: 3000
    })
})
