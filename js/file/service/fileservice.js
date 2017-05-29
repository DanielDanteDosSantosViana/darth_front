angular.module("DarthServices").factory("FileService", [
    "$http",
    function($http)
    {
        function FileServiceObject()
        {
            var self = this;

            self.files = function(fn_success, fn_error)
            {
                $http({
                    method: "GET",
                    url: "http://localhost:3000/file?directory=output",
                    cache: false,
                    responseType: "json"
                }).
                success(function(data , status , headers, config)
                {
                  console.log(data)
                    var files = [];

                    total = 72;
                    value = 4444;
                    dataReceiver = "29/07/2016"

                    nome = "CC_TIM20170514211045_777_22.OUT";
                    diretorio = "output";
                    sequencial = "22";
                    bank = "777";

                    status = new Status(total,value,dataReceiver)
                    file = new File(nome,diretorio,status,bank,sequencial)
                    files.push(file)
                    fn_success(files);
                }).error(function(data, status, headers, config) {
                  fn_error("AJAX ERROR:\n" + config.method + ": " + config.url + "\nstatus: " + status + "\nresponse: " + angular.toJson(data, true));
                  });
            }

        }

         return new FileServiceObject();
    }


]);
