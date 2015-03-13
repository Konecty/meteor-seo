Package.describe({
  summary: "Easily config SEO for your routes",
  version: "0.0.5",
  git: "https://github.com/Konecty/meteor-seo.git"
});

Package.on_use(function(api){
  api.versionsFrom("METEOR@0.9.0");

  api.use(['coffeescript', 'underscore'], ['client', 'server']);

  api.use([
    'jquery',
    'deps',
    'iron:router@1.0.0'
  ], 'client');

  api.addFiles([
    'seo_collection.coffee'
  ], ['client', 'server']);

  api.addFiles([
    'seo.coffee'
  ], 'client');

  api.addFiles([
    'seo_publications.coffee'
  ], 'server');
});
