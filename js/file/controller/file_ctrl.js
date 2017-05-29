angular.module("DarthController").controller("FilePresenter", [
    "$scope",
    "$routeParams",
    "FileService",
    function($scope, $routeParams, FileService)
    {

        var buscarFile = function()
        {
          FileService.files(
              function(files)
              {
                  $scope.files = files;
              },
              function(data) {
                  $scope.response = data;
              }
           );
        };

        //construtor
        {
            buscarFile();
        };
    }
]);
