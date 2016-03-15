angular.module('st2forget.action-verbs-game', []).
directive('actionVerbsGame', function () {
    return {
        controllerAs : 'multiplication',
        controller : ['$attrs', '$scope', function($attrs, $scope) {
            $scope.z = 5;
            $scope.t = 6;
        }],
        templateUrl: function(elem,attrs) {
            return (attrs.libPath || 'lib') + '/angular-action-verbs-game/templates/action-verbs.html'
        }
    };
});