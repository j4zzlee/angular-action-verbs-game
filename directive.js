angular.module('st2forget.action-verbs-game', []).
directive('actionVerbsGame', function () {
    return {
        controllerAs : 'multiplication',
        controller : ['$attrs', '$scope', function($attrs, $scope) {
            this.x = 3;
            this.y = 4;
            $scope.z = 5;
            $scope.t = 6;
        }],
        templateUrl : 'action-verbs.html'
    };
});