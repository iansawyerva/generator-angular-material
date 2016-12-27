<%= AppName %>.config(function ($provide) {
    $provide.decorator('<%= DecoratorName %>', function ($delegate) {
      // ...
      return $delegate;
    });
  });