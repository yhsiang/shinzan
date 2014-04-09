angular.module("app.templates", []).run(["$templateCache", function($templateCache) {$templateCache.put("app/partials/about.html","<div class=\"about-content\"><h2>About This is site</h2><div class=\"ui two column divide grid\"><div class=\"row\"><div class=\"column\"><div class=\"ih-item circle colored effect3 left_to_right\"><a href=\"#\"><div class=\"img\"><img src=\"img/g0v-shinzan.jpg\" alt=\"g0v shinzan\"/></div><div class=\"info\"><h3>g0v 新參者</h3><p>初來乍到的新參鹿</p><p>有朝一日希望能成為g0v大使</p></div></a></div></div><div class=\"column\"><div class=\"ih-item circle colored effect3 left_to_right\"><a href=\"#\"><div class=\"img\"><img src=\"img/g0v-dashi.jpg\" alt=\"g0v dashi\"/></div><div class=\"info\"><h3>g0v 大使</h3><p>相當老練的熊大使</p><p>不辭辛勞的帶領著眾多新參鹿</p></div></a></div></div></div></div></div>");
$templateCache.put("app/partials/motions.html","<div ng-class=\"{list: sitting}\" class=\"motions\"><h1><a href=\"/motions/{{session}}\"></a>第八屆第二會期</h1><div ng-hide=\"sitting\" class=\"row-fluid\"><div class=\"span10 chart\"></div><div class=\"span2 legends\"></div></div><button id=\"btnTop\" ng-controller=\"topBtnCtrl\" ng-show=\"showBtn\" ng-click=\"jumpToTop()\" class=\"btn\">Jump to Top</button><div ng-show=\"sitting\" class=\"list\"><h2>第 {{sitting}} 次院會</h2><div class=\"row-fluid\"><div class=\"span2 sidebar\"><ul class=\"nav nav-list\"><li ng-repeat=\"s in allStatus\" ng-click=\"setStatus(s.key)\" ng-class=\"{active: s.key == status}\"><a href=\"#\">{{s.value}}</a></li></ul><input ng-model=\"filter\" placeholder=\"Search\" class=\"filter search-query\"/></div><div class=\"span10 content\"><ul class=\"nav nav-tabs\"><li ng-repeat=\"s in allTypes\" ng-click=\"setType(s.key)\" ng-class=\"{active: s.key == type}\"><a href=\"#\">{{s.value}}</a></li></ul><ul ng-class=\"{{type}}\" class=\"motions\"><li ng-repeat=\"e in entries | filter:{status: status} | filter:filter\" class=\"row\"><div class=\"avatars\"><span ng-repeat=\"avatar in e.avatars\"><img ng-src=\"http://avatars.io/52ed1f85c747b48148000053/{{avatar.avatar}}?size=small\" ng-alt=\"{{avatar.name}}\" ng-class=\"avatar.party\" class=\"avatar\"/></span></div><div class=\"motion\"><span class=\"item\">{{ e.item }}</span><span class=\"proposer\">{{ e.proposer }}</span><a ng-href=\"/bills/{{ e.id }}\"><span class=\"summary\">{{ e.summary }}</span></a></div><div class=\"resolution\">{{ e.resolution }}</div></li></ul></div></div></div></div>");
$templateCache.put("app/partials/nav.html","<div class=\"ui top fixed inverted collapsible menu\"><div class=\"container hide-print\"><div class=\"header\"><a href=\"/\" class=\"left floated item header brand\">Angular/LiveScript</a><div class=\"ui mini right floated button\"><i class=\"list icon\"></i></div><a href=\"http://livescript.net\" target=\"_blank\" class=\"right floated item branding\"><img src=\"http://livescript.net/images/icon.png\"/></a></div><div class=\"content\"><a ng-href=\"/\" ng-class=\"{active:activeTab == \'\'}\" class=\"item\">Home</a><div class=\"right floated menu\"><a ng-href=\"#/about\" ng-class=\"{active:activeTab == \'about\'}\" class=\"item about\">關於</a></div><a href=\"http://github.com/clkao/angular-livescript-seed\" class=\"ui top right attached label build-id\">{{ config_build }}</a></div></div></div>");}]);