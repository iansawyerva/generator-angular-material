<%= AppName %>.config(['$provide', function ($provide) {
    $provide.decorator('<%= DecoratorName %>', ['$delegate', function ($delegate) {
      // ...
      return $delegate;
    }]);
  }]);