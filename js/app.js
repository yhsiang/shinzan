require.register("config.jsenv",function(t,o,e){e.exports={BUILD:"git-ef2a5a8"}}),angular.module("App",["app.templates","ui.router"]).config(["$stateProvider","$urlRouterProvider","$locationProvider"].concat(function(t,o){return t.state("about",{url:"#/about",templateUrl:"app/partials/about.html",controller:"About"}),o.otherwise("#/about")})).run(["$rootScope","$state","$stateParams","$location","$window","$anchorScroll"].concat(function(t,o,e,n){return t.$state=o,t.$stateParam=e,t.config_build=require("config.jsenv").BUILD,t.$on("$stateChangeSuccess",function(t,o){var e;return e=o.name,"undefined"!=typeof window&&null!==window&&"function"==typeof window.ga?window.ga("send","pageview",{page:n.$$path,title:e}):void 0})})).controller({AppCtrl:["$scope","$location","$rootScope","$sce"].concat(function(t,o){return t.$location=o,t.$watch("$location.path()",function(o){return o||(o="/"),t.activeNavId=o,t}),t.getClass=function(o){return t.activeNavId.substring(0,o.length===o)?"active":""}})}).controller({About:["$rootScope","$http"].concat(function(t){return t.activeTab="about"})});