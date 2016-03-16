angular.module('st2forget.action-verbs-game', [])
    .directive('actionVerbsGame', function () {
        var link = function ($scope, $element, $attrs) {
            //Handle events here
        };

        return {
            controllerAs: 'actionVerbsGame',
            controller  : ['$attrs', '$scope', '$element', function ($attrs, $scope, $element) {
                $scope.libPath = $attrs.libPath;
                $scope.model   = {
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

                $scope.itemClick = function (e) {
                    console.log(e.target);
                };
            }],
            templateUrl    : 'lib/angular-action-verbs-game/templates/action-verbs.html',
            link        : link
        };
    });
