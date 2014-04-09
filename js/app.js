require.register("config.jsenv", function(exports, require, module){
    module.exports = {
  "BUILD": "git-unknown"
}
});
angular.module("App", ['app.templates', 'ui.router']).config(['$stateProvider', '$urlRouterProvider', '$locationProvider'].concat(function($stateProvider, $urlRouterProvider, $locationProvider){
  $stateProvider.state('about', {
    url: '/about',
    templateUrl: 'app/partials/about.html',
    controller: "About"
  });
  $urlRouterProvider.otherwise('/about');
  return $locationProvider.html5Mode(true);
})).run(['$rootScope', '$state', '$stateParams', '$location', '$window', '$anchorScroll'].concat(function($rootScope, $state, $stateParams, $location, $window, $anchorScroll){
  $rootScope.$state = $state;
  $rootScope.$stateParam = $stateParams;
  $rootScope.config_build = require('config.jsenv').BUILD;
  return $rootScope.$on('$stateChangeSuccess', function(e, arg$){
    var name;
    name = arg$.name;
    return typeof window != 'undefined' && window !== null ? typeof window.ga === 'function' ? window.ga('send', 'pageview', {
      page: $location.$$path,
      title: name
    }) : void 8 : void 8;
  });
})).controller({
  AppCtrl: ['$scope', '$location', '$rootScope', '$sce'].concat(function(s, $location, $rootScope, $sce){
    s.$location = $location;
    s.$watch('$location.path()', function(activeNavId){
      activeNavId || (activeNavId = '/');
      return s.activeNavId = activeNavId, s;
    });
    return s.getClass = function(id){
      if (s.activeNavId.substring(0, id.length === id)) {
        return 'active';
      } else {
        return '';
      }
    };
  })
}).controller({
  About: ['$rootScope', '$http'].concat(function($rootScope, $http){
    return $rootScope.activeTab = 'about';
  })
});