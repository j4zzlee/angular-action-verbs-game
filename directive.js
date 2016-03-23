angular.module('st2forget.action-verbs-game', [])
    .directive('actionVerbsGame', function () {
        var link = function ($scope, $element, $attrs) {

        };

        return {
            controllerAs: 'actionVerbsGame',
          require : 'ngModel',
            scope: {
              model : '=ngModel'
            },
            controller  : [
                '$attrs',
                '$scope',
                '$element',
                '$window',
                '$sce',
                '$timeout',
                function ($attrs, $scope, $element, $window, $sce, $timeout) {
                    $scope.directiveRootPath = $attrs.directiveRootPath;
                    $scope.chosenAnswer      = null;
                    $scope.hasPassed         = false;

                    $scope.buildModel = function () {
                        var randomAnswers = [],
                            questions     = $scope.model.Questions;

                        questions.forEach(function (question) {
                            if ($window.plugins && $window.plugins.NativeAudio) {
                              $window.plugins.NativeAudio.preloadSimple(question.Statement, question.Sound);
                            }

                            var answer = question.Answers[0];

                            randomAnswers.push({
                                Id        : answer.Id,
                                QuestionId: question.Id,
                                Value     : '',
                                Photo     : answer.Photo,
                                Statement : question.Statement,
                                Sound     : $sce.trustAsResourceUrl(question.Sound)
                            });

                            randomAnswers.push({
                                Id        : answer.Id,
                                QuestionId: question.Id,
                                Value     : question.Statement,
                                Photo     : '',
                                Statement : question.Statement,
                                Sound     : $sce.trustAsResourceUrl(question.Sound)
                            })
                        });

                        randomAnswers = _.shuffle(randomAnswers);
                        return randomAnswers;
                    };

                    $scope.getTemplateUrl = function () {
                        return $scope.directiveRootPath + '/angular-action-verbs-game/templates/action-verbs.html';
                    };

                    $scope.verify = function (answer) {
                        if (!$scope.chosenAnswer) {
                            $scope.chosenAnswer = answer;
                            return;
                        }

                        if (answer.QuestionId === $scope.chosenAnswer.QuestionId) {
                            //Pop question out
                            this.model.Questions = this.model.Questions.filter(function (q) {
                                return q.Id !== answer.QuestionId;
                            });
                        } else {
                            answer.isActive = false;
                            $scope.chosenAnswer.isActive = false;
                        }

                        $scope.chosenAnswer = null;

                        if (!this.model.Questions || !this.model.Questions.length) {
                            $scope.hasPassed = true;
                        }
                    };

                    $scope.itemClick = function (answer, e) {
                        if (answer.isActive) {
                            return;
                        }

                        answer.isActive = true;
                        if ($window.plugins && $window.plugins.NativeAudio) {
                          $window.plugins.NativeAudio.play(answer.Statement);
                        } else {
                            var $el = angular.element(e.target).parent();
                            if ($el && $el.length) {
                                var audio = $el[0].querySelector('.audio');
                                audio.play();
                            }
                        }

                        //wait for animation complete
                        $timeout(function () {
                            $scope.verify(answer);
                        }, 1500);

                    };

                    $scope.sortedAnswers = $scope.buildModel();
                }],

            template: '<ng-include src="getTemplateUrl()"></ng-include>',
            link    : link
        };
    });
