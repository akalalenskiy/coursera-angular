( function() {
  'use strict'

  angular.module('LChecker', [])
  .controller('LCheckController', LCheckController);

  LCheckController.$inject = ['$scope'];
  function LCheckController($scope, $filter) {
    $scope.msg = '';

    console.log($scope.menu);

    $scope.calcCalories = function() {
      var itemsCount = countItems($scope.menu);

      if (itemsCount > 0 && itemsCount < 3)
      {
        $scope.msg = "Enjoy!";
      }
      else
      {
        $scope.msg = "Too much!";
      }
    }


    function countItems(string) {
      console.log("Passed string: " + string)
      var words = string.split(',');
      console.log(words.length)
      return words.length;
    }
  }
})();
