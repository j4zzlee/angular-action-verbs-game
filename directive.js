angular.module('st2forget.action-verbs-game', [])
    .directive('actionVerbsGame', function () {
        var model = {
            description: 'Practice Action Verbs Vocabulary with this ESL  Memory Game. This game is also excellent for Vocabulary Teaching and Practice. ESL Learners and Teachers can use it to review English vocabulary or simply practice these words. This memory games has audio, images and text which makes it possible to practice spelling, reading, listening and word recognition. It is great for beginner and elementary ESL Lesson Plans.',
            questions  : [
                {
                    id       : 1,
                    statement: 'Drink',
                    answers  : [
                        {
                            id        : 1,
                            questionId: 1,
                            value     : 'Drink'
                        },
                        {
                            id        : 2,
                            questionId: 1,
                            value     : 'Uong'
                        }
                    ]
                },
                {
                    id       : 2,
                    statement: 'Swim',
                    answers  : [
                        {
                            id        : 3,
                            questionId: 2,
                            value     : 'Swim'
                        },
                        {
                            id        : 4,
                            questionId: 2,
                            value     : 'Boi'
                        }
                    ]
                }
            ]
        };

        var link = function ($scope, $element, $attrs) {

        };

        return {
            controllerAs: 'actionVerbsGame',
            controller  : ['$attrs', '$scope', '$element', function ($attrs, $scope, $element) {
                $scope.directiveRootPath = $attrs.directiveRootPath;
                $scope.model   = model;

                $scope.itemClick = function (e) {
                    console.log(e.target);
                };

                $scope.getTemplateUrl = function () {
                    return $scope.directiveRootPath + '/angular-action-verbs-game/templates/action-verbs.html';
                };
            }],

            template: '<ng-include src="getTemplateUrl()"></ng-include>',
            link    : link
        };
    });
