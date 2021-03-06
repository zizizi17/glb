var app = angular.module('App', []);

app
    .filter('distance', function () {
        return function (input) {
            return (input/100).toFixed(2) + ' m';
        }
    })
    .filter('mass', function() {
        return function(input) {
            return input + ' Kg';
        }
    })
    .controller('MainCtrl', ['$scope', 'SwapiService', function($scope, SwapiService) {
        $scope.currentId = 1;
        $scope.getHero = function(id) {
            $scope.isLoaded = false;
            SwapiService.getHeroData('people/'+ id + '/')
                .then(response => {
                    $scope.data = response.data;
                    var reqArr = response.data.films;
                    //for github https request
                    reqArr = reqArr.map(el => {
                        return el.replace('http', 'https');
                    })
                    return SwapiService.getFilms(reqArr);
                })
                .then(response => {
                    $scope.data.films = response
                                            .map(el => el.data)
                                            .sort((a,b) => a.episode_id - b.episode_id);
                    $scope.isLoaded = true;
                });
        }
        $scope.navNext = function() {
            if($scope.currentId >= 1 && $scope.currentId < $scope.maxCount) {
                $scope.currentId++;
                $scope.getHero($scope.currentId);
            }
        }
        $scope.navBack = function() {
            if($scope.currentId > 1 && $scope.currentId <= $scope.maxCount) {
                $scope.currentId--;
                $scope.getHero($scope.currentId);
            }
        }
        $scope.getHero($scope.currentId);
        SwapiService.init($scope.currentId)
            .then(response => {
                $scope.maxCount = response.data.count;
            })
    }])
    .factory('SwapiService', ['$http', '$q', function($http, $q) {
        function getHeroData(id) {
            let url = 'https://swapi.co/api/' + id;
            return $http.get(url);
        }
        function getFilms(arr) {
            arr = arr.map(el => $http.get(el));
            return $q.all(arr);
        }
        function init(id) {
            return $http.get('https://swapi.co/api/people/')
        }
        return {
            init: init,
            getHeroData: getHeroData,
            getFilms: getFilms
        }
    }]);
