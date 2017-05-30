angular.module("DarthController").controller("FilePresenter", [
    "$scope",
    "$routeParams",
    "FileService",
    function($scope, $routeParams, FileService)
    {

        var buscarFile = function()
        {

          if ($scope.directory==undefined){
            $scope.directory = "todos"
          }

          if ($scope.directory == "todos"){
            FileService.allfiles(
                function(files)
                {
                    $scope.files = files;
                },
                function(data) {
                    $scope.response = data;
                },
                 $scope.directory
             );
          }else{
            FileService.files(
                function(files)
                {
                    $scope.files = files;
                },
                function(data) {
                    $scope.response = data;
                },
                 $scope.directory
             );

          }
        };

        //construtor
        {
            $scope.directory = $routeParams.directory;
            buscarFile();
        };
    }
]);
