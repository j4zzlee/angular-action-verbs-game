angular.module('st2forget.action-verbs-game', [])
    .directive('actionVerbsGame', function () {
        var link = function ($scope, $element, $attrs) {
            //Handle events here
        };

        return {
            controllerAs: 'actionVerbsGame',
            controller  : ['$attrs', '$scope', '$element', '$css', function ($attrs, $scope, $element, $css) {
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

                $css.add('lib/angular-action-verbs-game/action-verbs.css');
                console.log('asfsdfsdf');
            }],
            template    : '<div class="action-verbs-item" ng-click="itemClick($event)" ng-repeat="question in model.questions">' +
            '{{ question.statement }}' +
            "</div>",
            link        : link,
            css         : 'lib/angular-action-verbs-game/action-verbs.css'
        };
    });
