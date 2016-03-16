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
                            id   : 1,
                            value: 'Drink'
                        },
                        {
                            id   : 2,
                            value: 'Uong'
                        }
                    ]
                },
                {
                    id       : 2,
                    statement: 'Swim',
                    answers  : [
                        {
                            id   : 3,
                            value: 'Swim'
                        },
                        {
                            id   : 4,
                            value: 'Boi'
                        }
                    ]
                },
                {
                    id       : 3,
                    statement: 'Eat',
                    answers  : [
                        {
                            id   : 5,
                            value: 'Eat'
                        },
                        {
                            id   : 6,
                            value: 'An'
                        }
                    ]
                },
                {
                    id       : 4,
                    statement: 'Run',
                    answers  : [
                        {
                            id   : 7,
                            value: 'Run'
                        },
                        {
                            id   : 8,
                            value: 'Chay'
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
                $scope.model             = model;

                $scope.buildModel = function () {
                    var sortedAnswers = [],
                        randomAnswers = [],
                        questions     = $scope.model.questions,
                        colCount      = 4;


                    questions.forEach(function (question) {
                        question.answers.forEach(function (answer) {
                            answer.questionId = question.id;
                            randomAnswers.push(answer);
                        })
                    });

                    randomAnswers = _.shuffle(randomAnswers);
                    var rowCount  = parseInt(randomAnswers.length / colCount)
                    if (rowCount * colCount < randomAnswers.length) {
                        rowCount += 1;
                    }

                    for (var i = 0; i < rowCount; i++) {
                        var row = [];
                        for (var j = 0; j < colCount; j++) {
                            var totalCount = colCount * i + j;
                            if (totalCount >= randomAnswers.length) {
                                break;
                            }
                            row.push(randomAnswers[totalCount]);
                        }
                        sortedAnswers.push(row);
                    }

                    return sortedAnswers;
                };

                $scope.sortedAnswers = $scope.buildModel();

                $scope.getTemplateUrl = function () {
                    return $scope.directiveRootPath + '/angular-action-verbs-game/templates/action-verbs.html';
                };

                $scope.itemClick = function (answer) {
                    answer.isActive = !answer.isActive;
                };
            }],

            template: '<ng-include src="getTemplateUrl()"></ng-include>',
            link    : link
        };
    });
