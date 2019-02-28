## Using ddme/craft
Create a new project by first creating and installing the project:
```
composer create-project ddme/craft PATH
```

Make sure that `PATH` is the path to your project, including the name you want for the project, e.g.:
```
composer create-project ddme/craft marlo
```

Then `cd` to your new project directory, and run Craft's `setup` console command to create your `.env` environments:
```
cd PATH
./craft setup
```

Finally, run the `marlo` command to install our predefined plugins:
```
./marlo setup
```

## Assumptions made
Since this is the boilerplate DDME uses for projects, it has a number of assumptions:
- [Laravel Mix](https://laravel.com/docs/5.8/mix) is used to compile assets
- [Tailwind CSS](https://tailwindcss.com/docs/what-is-tailwind) is used as the utility-first CSS framework
- The plugins listed below are required

### Craft Plugins
- [AWS S3](https://github.com/craftcms/aws-s3)
- [Contact Form](https://github.com/craftcms/contact-form)
- [Expanded Singles](https://github.com/verbb/expanded-singles)
- [Mailgun](https://github.com/craftcms/mailgun)
- [Minify](https://github.com/nystudio107/craft-minify)
- [Redactor](https://github.com/craftcms/redactor)
- [Typogrify](https://github.com/nystudio107/craft-typogrify)

### NPM Packages
- [Cross-env](https://www.npmjs.com/package/cross-env)
- [Expose Loader](https://www.npmjs.com/package/expose-loader)
- [Laravel Mix](https://www.npmjs.com/package/laravel-mix)
- [Laravel Mix Purgecss](https://www.npmjs.com/package/laravel-mix-purgecss)
- [jQuery](https://www.npmjs.com/package/jquery)
- [Javascript Cookie](https://www.npmjs.com/package/js-cookie)
- [Lazy Load](https://www.npmjs.com/package/lazyload)
- [Micromodal](https://www.npmjs.com/package/micromodal)
- [Parsley](https://www.npmjs.com/package/parsleyjs)
- [Sass](https://www.npmjs.com/package/sass)
- [Sass Loader](https://www.npmjs.com/package/sass-loader)
- [Tailwind CSS](https://www.npmjs.com/package/tailwindcss)
- [Vue Template Compiler](https://www.npmjs.com/package/vue-template-compiler)
