Package.describe({
  summary: "Easily config SEO for your routes",
  version: "0.0.7",
  git: "https://github.com/Konecty/meteor-seo.git",
  name: 'konecty:seo'
});

Package.on_use(function(api){
  api.versionsFrom("METEOR@0.9.0");

  api.use(['coffeescript', 'underscore', 'mongo'], ['client', 'server']);
  api.use(['iron:router'], ['client', 'server'], { weak: true });
  api.use(['kadira:flow-router'], ['client', 'server'], { weak: true });

  api.use(['jquery'], 'client');

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
