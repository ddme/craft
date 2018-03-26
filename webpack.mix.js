const mix = require('laravel-mix');
var tailwindcss = require('tailwindcss');
require('laravel-mix-purgecss');

// Custom PurgeCSS extractor for Tailwind that allows special characters in class names.
class TailwindExtractor {
  static extract(content) {
    return content.match(/[A-z0-9-:\/]+/g) || [];
  }
}

mix.js('./src/vendor.js', './public/dist/bundle.js')
   .sass('./src/styles.scss', './public/dist/styles.css')
     .options({
       processCssUrls: false,
       postCss: [ tailwindcss('./tailwind.js') ],
     })
   .purgeCss({
     enabled: true,
     globs: [
       path.join(__dirname, 'templates/**/*.{html,twig,svg}'),
       path.join(__dirname, 'src/*.scss'),
     ],
     extractor: TailwindExtractor,
     extensions: ['html', 'twig', 'js', 'php', 'scss', 'css', 'svg'],
     whitelistPatterns: [
       /cc-([A-z0-9-:\/]+)/,
       /hf-([A-z0-9-:\/]+)/
     ], // don't purge cookieconsent or form validation
   });
